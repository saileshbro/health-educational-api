const router = require('express').Router()
const { getAllFirstAids } = require('../controllers/firstaid.controller')
const { catchErrors } = require('../handlers/error.handler')
router.get('/', catchErrors(getAllFirstAids))

module.exports = router
