# stage 1: build (proses kompilasi)
FROM node:20-alpine As builder
WORKDIR /app

# copy file package untuk install dependencies
COPY package*.json ./
RUN npm install

# copy semua source code dan build ke js
COPY . .
RUN npm run build

# stage 2: production (proses menjalankan)
FROM node:20-alpine
WORKDIR /app

# hanya ambil file yang di butuhkan untuk menjalankan (dist & node_modules)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# cloud run akan memberikan port secara dinamis lewat env port
EXPOSE 8080

# jalankan aplikasi
CMD [ "node",'dist/main' ]