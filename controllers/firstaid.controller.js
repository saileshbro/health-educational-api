const { firstaids } = require('../json/firstaids.json')

exports.getAllFirstAids = async (req, res) => {
  const prefix = `${req.protocol}://${req.hostname}:${process.env.PORT}/`
  return res.json({
    firstaids: firstaids.map(e => {
      e.image_url = `${prefix}${e.imageUrl}`
      return e
    }),
  })
}
