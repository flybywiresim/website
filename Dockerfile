FROM node:current-alpine3.10 as builder

WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY tsconfig*.json ./
COPY craco.config.js ./
COPY tailwind.config.js ./
COPY ./src ./src
COPY ./public ./public

RUN npm run build


FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
