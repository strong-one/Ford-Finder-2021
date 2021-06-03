const seedTrucks = require("./truck-seeds");
const seedHybrids = require("./hybrid-seeds");
const seedSuvs = require("./suv-seeds");
const seedSedans = require("./sedan-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedTrucks();
  console.log("\n----- TRUCKS SEEDED -----\n");
  await seedHybrids();
  console.log("\n----- HYBRIDS SEEDED -----\n");
  await seedSuvs();
  console.log("\n----- SUVS SEEDED -----\n");
  await seedSedans();
  console.log("\n----- SEDANS SEEDED -----\n");
  await seedUsers();
  console.log("\n----- SEDANS SEEDED -----\n");
  process.exit(0);
};

seedAll();
