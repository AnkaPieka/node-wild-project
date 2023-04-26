const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
  create: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).save(req.body);

      res.send("Created Wilder");
    } catch (error) {
      res.send("Error while creating wilder");
    }
  },
  read: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).find();

      res.send("Wilders list");
    } catch (error) {
      res.send("Error while getting wilders");
    }
  },
  update: async (req, res) => {
    try {
      await dataSource.getRepository(Wilder).update(req.body.id, req.body.newData);

      res.send("Wilder Updated");
    } catch (error) {
      res.send("Error while deleting wilder");
    }
  },
  delete: (req, res) => {
    try {
      dataSource.getRepository(Wilder).delete(req.body);

      res.send("Wilder Deleted ");
    } catch (error) {
      res.send("Error while deleting wilder");
    }
  },
};
