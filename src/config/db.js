const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://estantevirtual_user:Sf1DOGDz3HrfwDrAeE0ivIB4hCMQsoRL@dpg-copa34f79t8c73bmb3c0-a.virginia-postgres.render.com/estantevirtual?sslmode=no-verify",
});

pool.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Base de Dados conectado com sucesso!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
