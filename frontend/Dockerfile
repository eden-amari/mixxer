FROM node:20-bookworm

ENV NODE_ENV=development \
    NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run dev -- --hostname 0.0.0.0"]
