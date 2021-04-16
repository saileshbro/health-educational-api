const { Router } = require('express')
const { catchErrors } = require('../handlers/error.handler')
const { getCommonDrugs } = require('../controllers/drug.controller')
const router = Router()
router.get('/common', catchErrors(getCommonDrugs))
module.exports = router
