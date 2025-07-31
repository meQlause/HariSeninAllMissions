-- ENUM must come first
CREATE TYPE OrderStatus AS ENUM ('berhasil', 'gagal', 'pending');
-- referenced early
CREATE TABLE kategori_kelas (
  id SERIAL PRIMARY KEY,
  kategori TEXT
);

CREATE TABLE tutor (
  id SERIAL PRIMARY KEY,
  nama TEXT,
  profil TEXT,
  profil_kerja TEXT,
  created_at DATE DEFAULT CURRENT_DATE
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  nama_lengkap TEXT NOT NULL,
  jenis_kelamin TEXT NOT NULL,
  no_hp NUMERIC NOT NULL,
  email TEXT NOT NULL,
  kata_sandi TEXT NOT NULL,
  profil_pict TEXT, 
  created_at DATE DEFAULT CURRENT_DATE
);

CREATE TABLE pembayaran (
  id SERIAL PRIMARY KEY,
  metode_pembayaran TEXT
);

-- references kategori_kelas & tutor
CREATE TABLE produk (
  id SERIAL PRIMARY KEY,
  kategori_kelas INTEGER NOT NULL UNIQUE REFERENCES kategori_kelas(id),
  tutor_id INTEGER NOT NULL REFERENCES tutor(id),
  judul TEXT,
  tagline TEXT,
  deskripsi TEXT,
  created_at DATE DEFAULT CURRENT_DATE,
  review_count NUMERIC,
  average_rating NUMERIC
);

-- references produk & users
CREATE TABLE kelas_saya (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  produk_id INTEGER NOT NULL UNIQUE REFERENCES produk(id),
  total_modul NUMERIC,
  total_modul_selesai NUMERIC,
  pusrchased_at DATE DEFAULT CURRENT_DATE
);

CREATE UNIQUE INDEX kelas_saya_user_produk_idx ON kelas_saya(user_id, produk_id);

-- references produk, users, pembayaran
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  produk_id INTEGER NOT NULL UNIQUE REFERENCES produk(id),
  pembayaran_id INTEGER UNIQUE REFERENCES pembayaran(id),
  status OrderStatus,
  order_at DATE DEFAULT CURRENT_DATE
);

-- references produk
CREATE TABLE pretest (
  id INTEGER PRIMARY KEY,
  produk_id INTEGER NOT NULL UNIQUE REFERENCES produk(id) ON DELETE CASCADE,
  quiz JSON
);

-- references produk & users
CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  produk_id INTEGER NOT NULL REFERENCES produk(id) ON DELETE CASCADE,
  review TEXT,
  rating INTEGER,
  created_at DATE DEFAULT CURRENT_DATE
);

CREATE UNIQUE INDEX user_produk_review_unique ON review(user_id, produk_id);


-- references produk
CREATE TABLE modul_kelas (
  id SERIAL PRIMARY KEY,
  produk_id INTEGER NOT NULL REFERENCES produk(id) ON DELETE CASCADE,
  judul TEXT
);

-- references modul_kelas
CREATE TABLE material (
  id SERIAL PRIMARY KEY,
  modul_kelas_id INTEGER NOT NULL REFERENCES modul_kelas(id) ON DELETE CASCADE,
  quiz JSON,
  video_link TEXT  
);
