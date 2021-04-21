const newsJson = require('../json/news.json')
exports.getAllNews = async (req, res) => {
  const { news } = newsJson
  return res.json(news)
}
