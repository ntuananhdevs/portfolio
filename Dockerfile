# =====================================================
# Stage 1: deps - Cài đặt dependencies
# =====================================================
FROM node:22-alpine AS deps

# Cài đặt pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy file khai báo dependencies
COPY package.json pnpm-lock.yaml ./

# Cài đặt dependencies (chỉ production + devDeps cần cho build)
RUN pnpm install --frozen-lockfile

# =====================================================
# Stage 2: builder - Build ứng dụng
# =====================================================
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy node_modules từ stage deps
COPY --from=deps /app/node_modules ./node_modules

# Copy toàn bộ source code
COPY . .

# Build Next.js app (standalone output)
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# =====================================================
# Stage 3: runner - Image production tối giản
# =====================================================
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Tạo user non-root để bảo mật
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy các file cần thiết từ builder
COPY --from=builder /app/public ./public

# Next.js standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
