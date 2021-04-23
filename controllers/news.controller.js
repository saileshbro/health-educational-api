const news = require('../json/news.json')
exports.getAllNews = async (req, res) => {
  return res.json(news)
}
