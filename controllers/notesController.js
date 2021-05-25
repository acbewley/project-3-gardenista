const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Entries.find(req.query)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Entries.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Entries.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Entries.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Entries.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};