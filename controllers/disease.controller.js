const diseases = require('../json/diseases.json')
exports.getAllDiseases = async (req, res) => {
  return res.json(diseases)
}
