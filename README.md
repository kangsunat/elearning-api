# 🎓 EduFlow E-Learning API

EduFlow adalah API backend untuk platform E-Learning yang dibangun dengan **NestJS** dan **MongoDB**. Project ini mendemonstrasikan implementasi NoSQL yang efisien, penggunaan caching untuk performa tinggi, dan kontainerisasi dengan Docker.

## 🚀 Fitur Utama

- **Course Management**: CRUD Kursus dengan skema _Embedded Documents_ (materi di dalam kursus).
- **Advanced Pagination**: Pembagian data otomatis untuk efisiensi network.
- **In-Memory Caching**: Mengurangi beban database dengan penyimpanan sementara hasil query.
- **Validation**: Keamanan data input menggunakan `class-validator`.
- **Docker Ready**: Setup database instan tanpa perlu instalasi manual.

## 🛠️ Stack Teknologi

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)
- **Language**: TypeScript
- **Container**: Docker & Docker Compose
- **Cache**: Cache Manager (In-Memory)

## 📦 Prasyarat

- [Node.js](https://nodejs.org/) v20+ (Rekomendasi)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🏃 Cara Menjalankan Project

### 1. Clone Project

```bash
git clone [https://github.com/kangsunat/elearning-api.git](https://github.com/kangsunat/elearning-api.git)
cd elearning-api
```

### 2. Setup Environment

Buat file `.env` di root folder:

```env
MONGODB_URI=mongodb://admin:password123@localhost:27017/elearning?authSource=admin
PORT=3000

```

### 3. Jalankan MongoDB (Docker)

```bash
docker-compose up -d

```

### 4. Install Dependensi & Jalankan Aplikasi

```bash
npm install
npm run start:dev

```

## 🔌 API Endpoints (Preview)

| Method    | Endpoint                   | Deskripsi                                  |
| --------- | -------------------------- | ------------------------------------------ |
| **POST**  | `/courses`                 | Membuat kursus baru                        |
| **GET**   | `/courses?page=1&limit=10` | Mengambil kursus dengan pagination & cache |
| **PATCH** | `/courses/:id/lessons`     | Menambah materi (lesson) ke dalam kursus   |

## 🏗️ Struktur Skema (NoSQL Design)

Aplikasi ini menggunakan pola **Embedding** untuk performa baca yang optimal:

- **Course** (Root Document)
- `title`: String
- `description`: String
- `lessons`: Array of **Lesson Objects** (Sub-documents)

---

Developed with ❤️ by **Ahmad Nasirin**
