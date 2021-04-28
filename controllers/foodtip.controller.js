const foodtips = require('../json/foodtips.json')
exports.getAllFoodTips = async (req, res) => {
  return res.json(foodtips)
}
