# Use the official Node.js image as a base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run start


# Expose the port that Next.js will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
