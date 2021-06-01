const seedTrucks = require("./truck-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedTrucks();
  console.log("\n----- TRUCKS SEEDED -----\n");
  process.exit(0);
};

seedAll();
