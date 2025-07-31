# Mission9 Database Setup

This project uses **PostgreSQL in Docker** with an auto-initializing SQL script.

## 📦 Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd Mission9
   ```

2. Run the database:

   ```bash
   docker-compose up --build
   ```

   On the **first run**, Docker will:

   - Start a PostgreSQL container
   - Automatically execute `init/init.sql` to create the tables

## ⚠️ Resetting the Database

If you want to re-run the `init.sql` (e.g., after editing the schema), you **must delete Docker's internal volume**.  
PostgreSQL **only executes `init.sql` when the database is empty** (i.e., uninitialized).

### 🧹 Reset Steps

```bash
docker-compose -f [filenamme] down --volumes
docker volume prune -f     # optional: clean unused volumes
docker-compose -f [filenamme] up --build
```

> This will wipe all data and re-run the SQL script from scratch. or you can directly remoe the volume:

```bash
docker-compose -f [filenamme] down --volumes
docker volume rm [volume_name]
```

> you can check the volume's name by :

```bash
docker volume ls
```

## 📝 Notes

- The SQL script creates tables like:
  - `produk`, `kategori_kelas`, `tutor`, `users`, `orders`, `pembayaran`
  - `kelas_saya`, `pretest`, `review`, `modul_kelas`, `material`
- Foreign keys and `ON DELETE CASCADE` are used to maintain data integrity.
- No Docker volumes are defined, so data is always reset unless you add persistence manually.

## 🐚 Accessing PostgreSQL Data (from Docker CLI)

To inspect the data directly using the terminal:

### 1. Check the running container name

```bash
docker ps
```

Look under the `NAMES` column (e.g., `mission9-db-1`).

### 2. Open a shell into the PostgreSQL container

```bash
docker exec -it mission9-db-1 bash
```

### 3. Login to PostgreSQL using `psql`

```bash
psql -U admin -d educourse
```

### 4. Inside psql, run SQL commands:

List all tables:

```sql
\dt
```

View data in `produk` table:

```sql
SELECT * FROM produk;
```

Exit PostgreSQL:

```sql
\q
```

Exit the container:

```bash
exit
```

## 📊 Optional: Adminer GUI Access

You can uncomment the `adminer` section in your `docker-compose.yml` to enable [Adminer](https://www.adminer.org/), and re-run Docker Compose:

### 1. Open Adminer in Your Browser

Visit:

http://localhost:8080

### 2. Login with the Following Details:

| Field     | Value      |
|-----------|------------|
| System    | PostgreSQL |
| Server    | `db`       |
| Username  | `admin`    |
| Password  | `admin`    |
| Database  | `educourse`|

---

### 3. Browse Tables and Data

Once connected:

- You can use Adminer's web UI to:
  - View and edit tables
  - Run SQL queries
  - Inspect schema and data easily
