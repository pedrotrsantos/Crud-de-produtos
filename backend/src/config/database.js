const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("projetotask", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso.");
  } catch (error) {
    console.error("Erro ao conectar-se ao banco de dados:", error);
  }
})();

module.exports = sequelize;
