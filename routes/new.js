// New.js router

const express = require('express');
const router = express.Router();
const { messageArray } = require('./index');

/* GET new message form */
router.get('/', function(req, res, next) {
  console.log('Current messageArray: ', messageArray);
  res.render('form');
});

router.post('/', function(req, res, next) {
  console.log('Iterating messageArray: ', messageArray);
  // Handle the POST request here
  const { messageText, messageUser } = req.body;
  const clientIP = req.ip;

  // Push the new message into messageArray
  messageArray.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
    ip: clientIP
  });
  
  console.log('Updated messageArray: ', messageArray);

  // Redirect to the home page after adding the message
  res.redirect('/');
});

module.exports = router;
