const proModel = require("../models/professionalModel");

const proCont = {};

proCont.getProfessional = async (req, res, next) => {
  const proData = await proModel.getPro();
  if (proData.professionalName) {
    return res.json(proData);
  } else {
    next(new Error("No Professional data returned"));
  }
};

module.exports = proCont;
