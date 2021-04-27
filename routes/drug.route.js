const { Router } = require('express')
const { catchErrors } = require('../handlers/error.handler')
const {
  getCommonDrugs,
  searchDrugs,
} = require('../controllers/drug.controller')
const router = Router()
router.get('/common', catchErrors(getCommonDrugs))
router.get('/search', catchErrors(searchDrugs))
module.exports = router
