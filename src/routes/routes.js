const express = require('express');
const router = express.Router();
const path = require('path');
const whatsAppController = require(path.join(__dirname, '../controllers/whatsappController'));

router.get('/', whatsAppController.verifyToken);
router.post('/', whatsAppController.ReceivedMessage);

module.exports = router;