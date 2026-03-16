# 📚 EduFlow API – Modern E-Learning Management System

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**EduFlow** adalah RESTful API berperforma tinggi yang dirancang untuk mengelola ekosistem pembelajaran digital. Project ini mendemonstrasikan transisi dari pola pikir Relational (SQL) ke **Document-Based Modeling** menggunakan MongoDB untuk menangani konten yang dinamis.

---

## 🚀 Fitur Utama

- **Flexible Course Schema**: Implementasi _Embedded Documents_ untuk modul kursus (Video, Artikel, Kuis) untuk meminimalkan JOIN.
- **Hybrid Relationship**: Menggabungkan teknik _Referencing_ untuk data User dan _Embedding_ untuk konten kursus.
- **Type-Safe Database Ops**: Full integrasi Prisma ORM dengan TypeScript.
- **Professional Validation**: Validasi input menggunakan `class-validator` dan `mapped-types`.
- **Auto-Generated Documentation**: Swagger UI terintegrasi untuk eksplorasi API.

---

## 🏗️ Desain Arsitektur & Database

Project ini menggunakan pola **Domain-Driven Design (DDD)** sederhana untuk memastikan kode tetap _scalable_.

### Perbandingan Data Model

| Fitur     | Pendekatan SQL (Lama)        | Pendekatan MongoDB (Project Ini)   |
| :-------- | :--------------------------- | :--------------------------------- |
| **Modul** | Tabel Terpisah (Foreign Key) | **Embedded Array** di dalam Course |
| **Query** | Heavy JOIN                   | Single Document Read (Lebih Cepat) |
| **Skema** | Rigid / Kaku                 | Flexible / Dynamic                 |

---

## 🛠️ Instalasi & Persiapan

### Prasyarat

- Node.js v18 atau lebih baru
- Instance MongoDB (Lokal atau Atlas)
- Pemahaman dasar TypeScript

### Langkah-langkah

1. **Clone Repository**

```bash
git clone https://github.com/kangsunat/elearning-api.git

cd elarning-api
```

2. **Instal Dependensi**

```bash
npm install
```

3. **Konfigurasi Environment**
   Buat file `.env` dan sesuaikan koneksi database Anda:

```env
DATABASE_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/elearning-api?retryWrites=true&w=majority"

PORT=3000

```

4. **Sinkronisasi Database**

```bash
npx prisma generate
```

5. **Jalankan Aplikasi**

```bash
# mode development
npm run start:dev

```

## 📂 Struktur Folder

```text
src/
├── common/         # Filter, Interceptor, & Guard Global
├── prisma/         # Prisma Service & Koneksi Database
├── users/          # Modul User & Autentikasi
├── courses/        # Modul Kursus & Logic Sub-dokumen
├── main.ts         # Entry Point Aplikasi
└── app.module.ts   # Root Module

```

---

## 👨‍💻 Author

**Ahmad Nasirin**
_Fullstack Developer_

---
