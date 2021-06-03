const { User } = require("../model");

const userData = [
  { name: "mark", email: "mark@gmail.com", password: "markmark" },
  { name: "joe", email: "joe@gmail.com", password: "joejoejoe" },
  { name: "Jack", email: "jack@gmail.com", password: "jackjack" },
  { name: "jill", email: "jill@gmail.com", password: "jilljill" },
  { name: "John", email: "john@gmail.com", password: "johnjohn" },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
