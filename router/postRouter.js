const express = require("express");
const router = express.Router();
const{create, index} = require('../controllers/posts.js');

router.post('/', create)

router.get('/', index)

module.exports = router; 