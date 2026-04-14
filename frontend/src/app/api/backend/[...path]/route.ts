const BACKEND_URL =
	process.env.MUSICMIXXER_BACKEND_URL ?? "http://127.0.0.1:8000";

type RouteContext = {
	params: Promise<{ path: string[] }>;
};

async function proxy(request: Request, context: RouteContext) {
	const { path } = await context.params;
	const requestUrl = new URL(request.url);
	const joinedPath = path.join("/");
	const forceTrailingSlash =
		joinedPath === "auth/registration" ||
		joinedPath === "token/refresh" ||
		joinedPath === "playlists";
	const forwardedPath = `/api/${joinedPath}${forceTrailingSlash ? "/" : ""}`;
	const targetUrl = new URL(forwardedPath, BACKEND_URL);
	targetUrl.search = requestUrl.search;

	const headers = new Headers();
	const authorization = request.headers.get("authorization");
	const contentType = request.headers.get("content-type");
	const spotifyToken = request.headers.get("x-spotify-access-token");

	if (authorization) {
		headers.set("authorization", authorization);
	}

	if (contentType) {
		headers.set("content-type", contentType);
	}

	if (spotifyToken) {
		headers.set("x-spotify-access-token", spotifyToken);
	}

	const init: RequestInit = {
		method: request.method,
		headers,
		redirect: "manual",
	};

	if (request.method !== "GET" && request.method !== "HEAD") {
		init.body = Buffer.from(await request.arrayBuffer());
	}

	const upstream = await fetch(targetUrl, init);
	const responseHeaders = new Headers();
	const upstreamContentType = upstream.headers.get("content-type");
	const upstreamLocation = upstream.headers.get("location");

	if (upstreamContentType) {
		responseHeaders.set("content-type", upstreamContentType);
	}

	if (upstreamLocation) {
		responseHeaders.set("location", upstreamLocation);
	}

	return new Response(await upstream.arrayBuffer(), {
		status: upstream.status,
		headers: responseHeaders,
	});
}

export const GET = proxy;
export const POST = proxy;
export const PATCH = proxy;
export const DELETE = proxy;
