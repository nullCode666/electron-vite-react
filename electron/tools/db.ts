
import { ipcMain } from 'electron';
import mysql, { Connection } from 'mysql';

const db: Connection = mysql.createConnection({
  host: '47.121.143.53',
  user: 'root',
  password: 'MM1314520m',
  database: 'yami_shops',
});

// 开启数据库连接
db.connect();

console.log(db.emit);




// 导出包含正删改查操作的方法供渲染进程调用
ipcMain.handle('mysqlQuery', async (event, query) => {
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
});
