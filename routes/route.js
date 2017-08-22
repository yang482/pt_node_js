const express = require('express');
const router = express.Router();

const index = require('./index');
const chat = require('./chatting/chat');
const note = require('./note/note');

router.use('/'       , index);
router.use('/chats'  , chat);
router.use('/notes'  , note);

module.exports = router;
