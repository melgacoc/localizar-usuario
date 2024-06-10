# Use the official Node.js 14 image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Copy local code to the container image.
COPY . .

# Install dependencies, build the app, and start the server
RUN npm run dev

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
