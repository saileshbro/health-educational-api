const router = require('express').Router()
const { getAllFoodTips } = require('../controllers/foodtip.controller')
const { catchErrors } = require('../handlers/error.handler')
router.get('/', catchErrors(getAllFoodTips))

module.exports = router
