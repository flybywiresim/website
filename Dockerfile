FROM timbru31/node-alpine-git:14 as builder

WORKDIR /app
ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

ENV NODE_ENV=production

COPY tsconfig*.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY src/lib ./src/lib
COPY src/posts ./src/posts
COPY src/components ./src/components
COPY src/pages ./src/pages
COPY src/styles ./src/styles
COPY ./public ./public

RUN npm run build
RUN npm run export


FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html
