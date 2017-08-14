const express = require('express');
const router = express.Router();

const index = require('./index');
const users = require('./users');
const chat = require('./chatting/chat');

router.use('/'      , index);
router.use('/users' , users);
router.use('/chat'  , chat);

module.exports = router;
