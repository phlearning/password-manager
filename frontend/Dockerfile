# Dockerfile for Angular
FROM node:18.19-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build --prod
RUN npm install -g http-server


# Serve the app using a simple HTTP server
CMD ["http-server", "dist/frontend/browser", "-p", "4200"]
