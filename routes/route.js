const express = require('express');
const router = express.Router();

const index = require('./index');
const chat = require('./chatting/chat');

router.use('/'      , index);
router.use('/chat'  , chat);

module.exports = router;
