const { Truck } = require("../models");

const truckData = [
  {
    truck_name: "F-150",
    engine_type: "v6",
    transmission: "automatic",
    color: "black",
    price: 28940.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v6",
    transmission: "automatic",
    color: "silver",
    price: 28940.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v6",
    transmission: "automatic",
    color: "blue",
    price: 28940.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v6",
    transmission: "automatic",
    color: "red",
    price: 28940.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v6",
    transmission: "automatic",
    color: "white",
    price: 28940.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "black",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "silver",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "blue",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "red",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "white",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "white",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "white",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "white",
    price: 56330.0,
  },
  {
    truck_name: "F-150",
    engine_type: "v8",
    transmission: "automatic",
    color: "white",
    price: 56330.0,
  },
];

const seedTrucks = () => Truck.bulkCreate(truckData);

module.exports = seedTrucks;
