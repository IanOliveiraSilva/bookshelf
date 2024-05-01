const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgres://estantevirtual_user:Sf1DOGDz3HrfwDrAeE0ivIB4hCMQsoRL@dpg-copa34f79t8c73bmb3c0-a.virginia-postgres.render.com:5432/estantevirtual",
});


pool.connect((err) => {
  if (err) {
    console.log("Conexão com o banco de dados falhou...");
    return;
  }
  console.log("Base de Dados conectado com sucesso!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
