# Image/search-service/Dockerfile

FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3002


CMD ["node", "server.js"]
