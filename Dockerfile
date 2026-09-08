# syntax=docker/dockerfile:1.7
#
# Multi-stage build for the Construct website (Nuxt 4, served by Nitro).
# The Go server has been retired — Nitro serves the static prerender
# output AND the dynamic /api endpoints from a single Node process.

# ---------- 1. Install deps with bun ------------------------------
FROM oven/bun:1-alpine AS deps
WORKDIR /app
COPY package.json bun.lock* ./
# bun.lock is not yet committed on the first migration build; the
# `bun.lock*` glob lets the install succeed either way and bun will
# generate one on first run.
RUN bun install --frozen-lockfile || bun install

# ---------- 2. Build Nuxt -----------------------------------------
FROM oven/bun:1-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---------- 3. Runtime --------------------------------------------
# Plain Node runtime. Smaller than oven/bun:1-alpine for serving and
# matches the standard Nitro Node preset (.output/server/index.mjs).
FROM node:22-alpine AS runtime
WORKDIR /app
COPY --from=build /app/.output ./.output

# CapRover convention: container listens on port 80. NITRO_PORT and
# HOST tell Nitro to bind there. NUXT_PUBLIC_SITE_URL is overridden in
# CapRover env vars (or docker-compose) for non-prod.
ENV NITRO_PORT=80 HOST=0.0.0.0 NODE_ENV=production
EXPOSE 80
CMD ["node", ".output/server/index.mjs"]
