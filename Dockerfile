# Development and Production Dockerfile
FROM node:20.18.0-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies based on the package-lock.json and package.json
COPY package*.json ./

# Install production dependencies separately for the production stage , excluding dev dependencies
# RUN npm install --only=production

# Dev dependencies for the dev stage
RUN npm install

# Copy the application source code
COPY . .

# Set environment for development
FROM base AS development
# CMD ["npm", "run", "dev"]

# Set environment for production
FROM base AS production
# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
