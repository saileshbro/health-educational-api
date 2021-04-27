const { commonDrugs, searchDrugs } = require('../services/drug.service')
module.exports.getCommonDrugs = async (req, res) => {
  const drugs = await commonDrugs()
  return res.json({ drugs })
}
module.exports.searchDrugs = async (req, res) => {
  const searchTerm = req.query.query
  const drugs = await searchDrugs(searchTerm)
  return res.json({ drugs })
}
