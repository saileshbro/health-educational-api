const { Router } = require('express')
const { catchErrors } = require('../handlers/error.handler')
const { getHomeData } = require('../controllers/home.controller')
const router = Router()
router.get('/', catchErrors(getHomeData))
module.exports = router
