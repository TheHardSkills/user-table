const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "yulia",
  password: "1",
  database: "test",
});

let usersdb = {};
usersdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM usersdb", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

usersdb.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM usersdb where id = ?", [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

usersdb.create = (body) => {
  console.log("body", body);
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT usersdb(id, first_name, last_name, email, gender, ip_address, car, company)VALUES(${body.id}, '${body.first_name}', '${body.last_name}', '${body.email}', '${body.gender}', '${body.ip_address}', '${body.car}', '${body.company}')`,
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });
};

// usersdb.update = (car, id) => {
//   console.log("id", car, id);
//   return new Promise((resolve, reject) => {
//     pool.query("UPDATE users SET car=? WHERE id=?", [car, id], (err, res) => {
//       if (err) {
//         return reject(err);
//       }
//       return resolve(res);
//     });
//   });
// };

usersdb.delete = (id) => {
  console.log("id", id);
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM usersdb WHERE id=?", [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(res);
    });
  });
};

module.exports = usersdb;
