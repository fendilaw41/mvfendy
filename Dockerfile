FROM php:7.1.3-fpm

# Instalasi dependensi yang dibutuhkan Laravel
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Salin file Laravel ke dalam container
WORKDIR /var/www
COPY . .

# Jalankan Laravel
CMD php artisan serve --host=0.0.0.0 --port=8000
