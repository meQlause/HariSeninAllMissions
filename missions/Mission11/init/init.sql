CREATE TYPE OrderStatus AS ENUM ('berhasil', 'gagal', 'pending');


CREATE TABLE verification_tokens (
    token UUID PRIMARY KEY,        
    email TEXT NOT NULL,      
    expires_at TIMESTAMP NOT NULL
);

CREATE INDEX idx_verification_tokens_expires_at ON verification_tokens(expires_at);

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
  email TEXT UNIQUE  NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  kata_sandi TEXT NOT NULL,
  profil_pict TEXT, 
  created_at DATE DEFAULT CURRENT_DATE
);

CREATE INDEX idx_users_email ON users(email);

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
  harga NUMERIC,
  durasi NUMERIC,
  deskripsi TEXT,
  created_at DATE DEFAULT CURRENT_DATE,
  review_count NUMERIC,
  average_rating NUMERIC
);

ALTER TABLE produk ADD COLUMN search_tsv tsvector;

UPDATE produk SET search_tsv =
    setweight(to_tsvector('indonesian', coalesce(judul, '')), 'A') ||
    setweight(to_tsvector('indonesian', coalesce(deskripsi, '')), 'B');

CREATE INDEX idx_produk_fts ON produk USING GIN (search_tsv);

CREATE FUNCTION produk_fts_trigger() RETURNS trigger AS $$
BEGIN
  NEW.search_tsv :=
    setweight(to_tsvector('indonesian', coalesce(NEW.judul, '')), 'A') ||
    setweight(to_tsvector('indonesian', coalesce(NEW.deskripsi, '')), 'B');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_produk_tsv
BEFORE INSERT OR UPDATE ON produk
FOR EACH ROW EXECUTE FUNCTION produk_fts_trigger();

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
