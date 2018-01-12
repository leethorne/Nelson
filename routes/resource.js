const express = require('express');
const router = express.Router();

const resourceController = require('../controllers/resource-controller.js')

//http://localhost:3000/api/v1/resources
router.get('/', resourceController.scrape)

module.exports = router;
