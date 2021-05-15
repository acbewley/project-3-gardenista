const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenista");

const userSeed = [
  {
    username: "test",
    password: "test123",
    plants: [
      {
        name: "Plant1",
        scientific_name: "Plant1ScientificName",
        image: "URLHERE_plant1",
        description: "put some dscription here for plant 1",
      },
    ],
  },
  {
    username: "test2",
    password: "test123",
    plants: [
      {
        name: "Plant2",
        scientific_name: "Plant2ScientificName",
        image: "URLHERE_plant2",
        description: "put some dscription here for plant 2",
      },
    ],
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " record inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
