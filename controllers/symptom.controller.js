const symptomsJson = require('../json/symptoms.json')
exports.getAllSymptoms = async (req, res) => {
  const { symptoms } = symptomsJson
  return res.json(symptoms)
}
