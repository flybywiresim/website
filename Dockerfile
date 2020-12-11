FROM composer:2.0.8 as build

RUN apk add --update nodejs npm

WORKDIR /app
COPY . /app
RUN composer install
RUN npm install && npm run prod


FROM php:7.3.0-apache

EXPOSE 80
COPY --from=build /app /app
COPY vhost.conf /etc/apache2/sites-available/000-default.conf
RUN chown -R www-data:www-data /app \
    && a2enmod rewrite
