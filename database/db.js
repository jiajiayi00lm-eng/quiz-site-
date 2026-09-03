const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'quiz.db');
const db = new sqlite3.Database(dbPath);

// 创建题目表
db.run(`CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    optionA TEXT,
    optionB TEXT,
    optionC TEXT,
    optionD TEXT,
    answer TEXT
)`);

module.exports = db;
