const router = require('express').Router()
const { getAllNews } = require('../controllers/news.controller')
const { catchErrors } = require('../handlers/error.handler')
router.get('/', catchErrors(getAllNews))

module.exports = router
