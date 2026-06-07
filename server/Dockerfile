# Stage 1: Build the TypeScript application
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --network-timeout=600000
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production --network-timeout=600000
COPY --from=builder /usr/src/app/dist ./dist
EXPOSE 3000
CMD [ "node", "dist/server.js" ]
