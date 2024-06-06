const express = require("express");
const router = express.Router();
const{create, index, show} = require('../controllers/posts.js');

router.post('/', create)

router.get('/', index)

router.get('/:slug', show)

module.exports = router; 