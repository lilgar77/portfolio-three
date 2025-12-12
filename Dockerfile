# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le code
COPY . .

# Builder le projet Vite
RUN npm run build

# ---------------------------------------

# Production stage : on sert avec nginx
FROM nginx:stable-alpine

# Copier les fichiers de build
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier ta configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]