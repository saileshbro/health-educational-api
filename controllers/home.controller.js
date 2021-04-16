const shuffle = require('shuffle-array')
const { diseases } = require('../json/diseases.json')
const { symptoms } = require('../json/symptoms.json')
const { news } = require('../json/news.json')
const { commonDrugs } = require('../services/drug.service')
exports.getHomeData = async (req, res) => {
  const shuffledDiseases = shuffle.pick(diseases, { picks: 10 })
  const shuffledSymptoms = shuffle.pick(symptoms, { picks: 10 })
  const shuffledNews = shuffle.pick(news, { picks: 10 })
  const drugs = await commonDrugs()
  return res.json({
    diseases: shuffledDiseases,
    symptoms: shuffledSymptoms,
    news: shuffledNews,
    drugs,
  })
}
