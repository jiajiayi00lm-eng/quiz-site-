const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 解析表单
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// 数据库
const db = new sqlite3.Database('./database/quiz.db', (err) => {
  if (err) console.error('数据库连接失败', err.message);
  else console.log('数据库已连接');
});

// 首页路由
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`服务正在端口 ${PORT} 运行`);
});
