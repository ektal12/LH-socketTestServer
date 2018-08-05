const express = require('express');
const router = express.Router();
const translationCtrl = require('../controllers/translationCtrl);

router.post('/translate', translationCtrl.translateText)

module.exports = router;