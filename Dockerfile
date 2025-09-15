# ---------- 1) Build stage ----------
FROM node:22-alpine AS builder
WORKDIR /app

# Install deps (use package-lock for reproducible builds)
COPY package*.json ./
RUN npm i

# Build
COPY . .
RUN npm run build

ENV NODE_ENV=production \
    PORT=3000

EXPOSE 3000
CMD ["node", "dist/main.js"]
