# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port that your app will run on (from the process.env.PORT variable)
EXPOSE ${PORT:-5001}

# Command to start the application
CMD ["npm", "start"]
