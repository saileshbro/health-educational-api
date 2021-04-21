const diseasesJson = require('../json/diseases.json')
exports.getAllDiseases = async (req, res) => {
  const { diseases } = diseasesJson
  return res.json(diseases)
}
