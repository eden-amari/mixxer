import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	outputFileTracingRoot: __dirname,
	turbopack: {
		root: __dirname,
	},
};

export default nextConfig;
