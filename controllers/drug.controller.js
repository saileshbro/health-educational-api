const { commonDrugs } = require('../services/drug.service')
module.exports.getCommonDrugs = async (req, res) => {
  const drugs = await commonDrugs()
  return res.json({ drugs })
}
