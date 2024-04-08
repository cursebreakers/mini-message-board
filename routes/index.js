// Innex.js 

const express = require('express');
const router = express.Router();

let messageArray = [

];

console.log('Entering index/new router: ', messageArray);

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET request received. Loading: ', messageArray);

  res.render('index', { title: 'Message Board', messageArray }); 
});

module.exports = router;
module.exports.messageArray = messageArray;