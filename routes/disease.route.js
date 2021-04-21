const router = require('express').Router()
const { getAllDiseases } = require('../controllers/disease.controller')
const { catchErrors } = require('../handlers/error.handler')
router.get('/', catchErrors(getAllDiseases))

module.exports = router
