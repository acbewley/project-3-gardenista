const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenista");

const plantsSeed = [
    {
        name: "Plant1",
        scientific_name: "Plant1ScientificName",
        image: "URLHERE_plant1",
        description: "put some dscription here for plant 1"
    },
    {
        name: "Plant2",
        scientific_name: "Plant2ScientificName",
        image: "URLHERE_plant2",
        description: "put some dscription here for plant 2"
    },
    {
        name: "Plant3",
        scientific_name: "Plant3ScientificName",
        image: "URLHERE_plant3",
        description: "put some dscription here for plant 3"
    },
    {
        name: "Plant4",
        scientific_name: "Plant4ScientificName",
        image: "URLHERE_plant4",
        description: "put some dscription here for plant 4"
    }
  ];
  
  db.Plants.remove({})
    .then(() => db.Plants.collection.insertMany(plantsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  