

# Express With Mongoose

## Langkah-langkah untuk Membuat Database Express dengan Mongoose

### Persiapan Awal
Pastikan Anda telah menginstal Node.js, Express, dan Mongoose.

1. Inisialisasi proyek Node.js dengan `npm init`.
2. Instal Express dengan perintah `npm install express`.
3. Instal Mongoose dengan perintah `npm install mongoose`.
4. Siapkan struktur proyek Anda dengan folder, file, dan struktur yang sesuai.

#### Endpoints Login
- `POST /auth/login`: Verifikasi user berdasar email dan password.

### Model User

#### Struktur Data
Model User memiliki struktur data sebagai berikut:
- `username`: String
- `email`: String
- `password`: String (hashed menggunakan bcrypt)

#### Endpoints Pengguna (User)
- `GET /users`: Mendapatkan semua pengguna.
- `GET /users/:id`: Mendapatkan pengguna berdasarkan ID.
- `GET /users/:id/todos`: Mendapatkan todos pengguna berdasarkan ID.
- `POST /users`: Membuat pengguna baru.
- `DELETE /users/:id`: Menghapus pengguna berdasarkan ID.
- `DELETE /users`: Menghapus semua pengguna.
- `PUT /users/:id`: Mengedit pengguna.

### Model Todo

#### Struktur Data
Model Todo memiliki struktur data sebagai berikut:
- `value`: String (Nilai dari todo)
- `status`: Boolean (Status keberlangsungan todo, default: false)
- `userId`: Referensi ke ID pengguna sebagai foreign key dari model User

#### Endpoints Todo
- `GET /todos`: Mendapatkan semua todos.
- `GET /todos/:id`: Mendapatkan todo berdasarkan ID.
- `POST /todos`: Membuat todo baru.
- `DELETE /todos/:id`: Menghapus todo berdasarkan ID.
- `DELETE /todos`: Menghapus semua todos.
- `PUT /todos/:id`: Mengedit todo.

### Pengamanan dengan Bcrypt dan Jsonwebtoken

Pengamanan dilakukan dengan menggunakan bcrypt untuk meng-hash password pengguna sebelum disimpan ke database, dan jsonwebtoken untuk otentikasi dan otorisasi pengguna.

Pastikan untuk:
- Hash password sebelum menyimpannya ke dalam database menggunakan bcrypt.
- Gunakan jsonwebtoken untuk proses otentikasi pengguna saat login dan untuk memberikan akses terotentikasi ke endpoint tertentu.
