# Production image for the marketing site (vrikso.com) on the Oracle VM.
# Much simpler than the CRM's: no database, no Prisma, no Chromium — just the
# standalone Next server. Build context is this repo's root:
#   docker build -f deploy/Dockerfile .
# The container is wired into the CRM's compose stack as the `site` service —
# see My-business-crm/deploy/docker-compose.yml and docs/SELF-HOST-ORACLE.md.

FROM node:24-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:24-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production HOSTNAME=0.0.0.0 PORT=3000
USER node
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
