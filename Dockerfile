FROM node:20-alpine

WORKDIR /docker_backend

# Copy package files first
COPY package*.json ./

# Install dependencies (THIS WAS MISSING)
RUN npm install

# Copy rest of code
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
