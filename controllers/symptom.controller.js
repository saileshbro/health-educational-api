const symptoms = require('../json/symptoms.json')
exports.getAllSymptoms = async (req, res) => {
  return res.json(symptoms)
}
