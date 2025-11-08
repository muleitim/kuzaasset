import { NextResponse } from "next/server";
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Neon Postgres URL
});

export async function POST() {
  try {
    await pool.query(`INSERT INTO visitor_log (timestamp) VALUES ( NOW() AT TIME ZONE 'Africa/Nairobi' )`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error logging visit:", error);
    return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
  }
}
