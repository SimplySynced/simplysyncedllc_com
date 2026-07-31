# Install dependencies only when needed
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy lockfile so yarn uses exact resolved versions
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 100000

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=3072"

RUN yarn build

# Production image — minimal footprint
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 ss_site
RUN adduser --system --uid 1001 ss_site

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Standalone output traces include only what is needed at runtime
COPY --from=builder --chown=ss_site:ss_site /app/.next/standalone ./
COPY --from=builder --chown=ss_site:ss_site /app/.next/static ./.next/static

USER ss_site

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
