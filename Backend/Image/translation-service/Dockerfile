# Image/translation-service/Dockerfile

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004

CMD ["node", "server.js"]
