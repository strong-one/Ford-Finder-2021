const { Suv } = require("../model");

const suvData = [
  {
    suv_name: "Ecosport",
    engine_type: "1.0L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 20395.0,
  },
  {
    suv_name: "Ecosport",
    engine_type: "1.0L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 20395.0,
  },
  {
    suv_name: "Ecosport",
    engine_type: "1.0L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 20395.0,
  },
  {
    suv_name: "Ecosport",
    engine_type: "1.0L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 20395.0,
  },
  {
    suv_name: "Ecosport",
    engine_type: "1.0L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 20395.0,
  },
  {
    suv_name: "Escape",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 25555.0,
  },
  {
    suv_name: "Escape",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 25555.0,
  },
  {
    suv_name: "Escape",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 25555.0,
  },
  {
    suv_name: "Escape",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 25555.0,
  },
  {
    suv_name: "Escape",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 25555.0,
  },
  {
    suv_name: "Bronco Sport",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 26820.0,
  },
  {
    suv_name: "Bronco Sport",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 26820.0,
  },
  {
    suv_name: "Bronco Sport",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 26820.0,
  },
  {
    suv_name: "Bronco Sport",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 26820.0,
  },
  {
    suv_name: "Bronco Sport",
    engine_type: "1.5L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 26820.0,
  },
  {
    suv_name: "Bronco",
    engine_type: "2.3L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 28500.0,
  },
  {
    suv_name: "Bronco",
    engine_type: "2.3L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 28500.0,
  },
  {
    suv_name: "Bronco",
    engine_type: "2.3L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 28500.0,
  },
  {
    suv_name: "Bronco",
    engine_type: "2.3L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 28500.0,
  },
  {
    suv_name: "Bronco",
    engine_type: "2.3L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 28500.0,
  },
  {
    suv_name: "Edge",
    engine_type: "2.0L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 32750.0,
  },
  {
    suv_name: "Edge",
    engine_type: "2.0L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 32750.0,
  },
  {
    suv_name: "Edge",
    engine_type: "2.0L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 32750.0,
  },
  {
    suv_name: "Edge",
    engine_type: "2.0L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 32750.0,
  },
  {
    suv_name: "Edge",
    engine_type: "2.0L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 32750.0,
  },
  {
    suv_name: "Expedition",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 49995.0,
  },
  {
    suv_name: "Expedition",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 49995.0,
  },
  {
    suv_name: "Expedition",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 49995.0,
  },
  {
    suv_name: "Expedition",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 49995.0,
  },
  {
    suv_name: "Expedition",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 49995.0,
  },
  {
    suv_name: "Expedition MAX",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "black",
    price: 54810.0,
  },
  {
    suv_name: "Expedition MAX",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "silver",
    price: 54810.0,
  },
  {
    suv_name: "Expedition MAX",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "blue",
    price: 54810.0,
  },
  {
    suv_name: "Expedition MAX",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "red",
    price: 54810.0,
  },
  {
    suv_name: "Expedition MAX",
    engine_type: "3.5L Ecoboost",
    transmission: "automatic",
    color: "white",
    price: 54810.0,
  },
];

const seedSuvs = () => Suv.bulkCreate(suvData);

module.exports = seedSuvs;
