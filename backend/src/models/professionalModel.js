const mongodb = require("../database");

async function getPro() {
  try {
      const result = await mongodb
        .getDb()
        .db()
        .collection("professional")
        .findOne();
      return result;
  } catch (error) {
    console.error("No MongoDB Data found error " + error);
  }
}

module.exports = {
  getPro,
};