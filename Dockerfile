FROM node:18-bullseye AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.

WORKDIR /app

ARG SECRET_DEPLOY_GITHUB_TOKEN=""
ARG SECRET_DEPLOY_GITHUB_USER=""
ENV SECRET_DEPLOY_GITHUB_TOKEN $SECRET_DEPLOY_GITHUB_TOKEN
ENV SECRET_DEPLOY_GITHUB_USER $SECRET_DEPLOY_GITHUB_USER
RUN git config --global url."https://${SECRET_DEPLOY_GITHUB_USER}:${SECRET_DEPLOY_GITHUB_TOKEN}@github.com/<YOUR_USERNAME>/".insteadOf "https://github.com/<YOUR_USERNAME>/"

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN yarn install


# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
ARG BUILD_ENV=production
ARG NODE_ENV=production

ENV NODE_ENV $NODE_ENV

COPY envs/.env.$BUILD_ENV .env
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]


