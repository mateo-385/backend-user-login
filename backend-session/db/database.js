import mysql from 'mysql2/promise'

export function database() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_system',
  })
}
