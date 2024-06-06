const express = require("express");
const router = express.Router();
const{create} = require('../controllers/posts.js');

router.post('/', create)

router.get('/', (req, res) => {
    res.send("<h1>Prova<h1>")
})

module.exports = router; 