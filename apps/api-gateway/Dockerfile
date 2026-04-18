# Usa una versión de Node que soporte --env-file de forma nativa
FROM node:20-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# 1. Copiar archivos de dependencias
COPY package*.json ./

# 2. Instalar dependencias con flag para conflictos de @angular/fire
RUN npm install --legacy-peer-deps

# 3. Copiar todo el código (incluyendo libs/)
COPY . .

# 4. Compilar la aplicación usando NX
# Dejamos solo UNA línea. --skip-nx-cache asegura que no use basura previa.
RUN npx nx build api-gateway --prod --skip-nx-cache

# 5. Exponer el puerto
EXPOSE 3000

# 6. Ejecución para ESM
CMD ["node", "--env-file=.env", "dist/apps/api-gateway/main.js"]
