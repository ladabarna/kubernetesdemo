const express = require('express');
const shark = require('../controllers/shark');

const router = express.Router();

router.get('/',function(req,res) {
    shark.index(req,res);
})


router.post('/addshark',function(req,res) {
    shark.create(req,res);
})

router.get('/getshark',function(req,res) {
    shark.list(req,res);
})

module.exports = router;