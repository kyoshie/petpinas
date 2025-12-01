import dotenv from "dotenv";
import pkg from "pg";

const { Pool } = pkg;
dotenv.config();

export const db = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: Number(process.env.DB_PORT) || 5433,
});

db.query('SELECT NOW()')
  .then(() => {
    console.log("✅ Connected to database");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });