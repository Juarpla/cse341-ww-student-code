const path = require("path");

const getPathDB = (filename) => {
  return path.join(__dirname, "../database", filename);
};

module.exports = {
  getPathDB,
};
