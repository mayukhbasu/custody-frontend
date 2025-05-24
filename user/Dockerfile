# Base image
FROM node:18 as builder

# Set working directory
WORKDIR /app

# Copy everything and install
COPY . .

# Build only custodyshell
RUN npm ci && npx nx build user

# Use nginx to serve static files
FROM nginx:alpine

COPY --from=builder /app/dist/user /usr/share/nginx/html

# Optional: custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
