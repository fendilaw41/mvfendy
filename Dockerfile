# Pilih PHP 7.1 sebagai image dasar
FROM php:7.4-fpm

# Install dependensi yang diperlukan Laravel
RUN apt-get update && \
    apt-get install -y \
    libpng-dev \
    libonig-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd && \
    docker-php-ext-install pdo pdo_mysql

# Install Composer
COPY --from=composer:1.10 /usr/bin/composer /usr/bin/composer

# Salin proyek Laravel ke container
WORKDIR /var/www
COPY . .

# Jalankan server Laravel
CMD php artisan serve --host=0.0.0.0 --port=8000
