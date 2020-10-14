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

    // pool.query(
    //   "INSERT INTO usersdb(first_name, last_name, email, gender, ip_address, car, company)VALUES('Base', 'Pharaoh', 'bpharaoh0@gmail.com', 'Male', '102.115.48.141', 'Chevrolet', 'Snaptags')",
    //   (err, res) => {
    //     console.log(err, res);
    //     pool.end();
    //   }
    // );
  });
};

module.exports = usersdb;
