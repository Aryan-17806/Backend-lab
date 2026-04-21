const express = require('express');
const router = express.Router();

const urlController = require('../Controllers/urlControllers');

router.post('/', urlController.generateUrl);

module.exports = router;