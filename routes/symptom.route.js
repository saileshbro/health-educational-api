const router = require('express').Router()
const { getAllSymptoms } = require('../controllers/symptom.controller')
const { catchErrors } = require('../handlers/error.handler')
router.get('/', catchErrors(getAllSymptoms))

module.exports = router
