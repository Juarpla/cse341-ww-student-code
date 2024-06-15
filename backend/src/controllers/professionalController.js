const fs = require("fs");
const utils = require("../utils");

const proCont = {};

proCont.getProJSON = async (req, res) => {
  const filePath = utils.getPathDB("professional.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the JSON file:", err);
      return res.status(500).send("Error reading the JSON file");
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (err) {
      console.error("Error analysing JSON file:", err);
      return res.status(500).send("Error analysing JSON file");
    }
  });
};

module.exports = proCont;
