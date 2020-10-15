const mysql = require("mysql2");

const options = {
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "yulia",
    password: "1",
    database: "test",
  },
};
const knex = require("knex")(options);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "yulia",
  password: "1",
  database: "test",
});

let usersdb = {};
usersdb.all = () => {
  return knex
    .from("usersdb")
    .select("*")
    .then((rows) => {
      return rows;
    })
    .catch((err) => {
      return err;
    });
};

usersdb.one = (id) => {
  return knex
    .from("usersdb")
    .select("*")
    .where("id", "=", `${id}`)
    .then((rows) => {
      return rows;
    })
    .catch((err) => {
      return err;
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
  // return new Promise((resolve, reject) => {
  //   pool.query("DELETE FROM usersdb WHERE id=?", [id], (err, res) => {
  //     if (err) {
  //       return reject(err);
  //     }
  //     return resolve(res);
  //   });
  // });

  return knex
    .from("usersdb")
    .delete()
    .where("id", "=", `${id}`)
    .then((rows) => {
      return rows;
    })
    .catch((err) => {
      return err;
    });
};

module.exports = usersdb;
