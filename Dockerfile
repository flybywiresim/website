FROM composer:2.0.8 as build

RUN apk add --update nodejs npm

WORKDIR /app

COPY package*.json /app
RUN npm install

COPY . /app
RUN composer install \
    && npm run prod


FROM php:7.3.0-apache

EXPOSE 80
ENV APP_NAME="FlyByWire Simulations"
COPY --chown=www-data:www-data --from=build /app /app
COPY vhost.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite