const path = require('path');
const Shark = require('../models/shark');


exports.index = function(req,res) {
    res.sendFile(path.resolve('view/shark.html'));
}


exports.create = function(req,res) {
    let shark = new Shark(req.body);
    console.log(shark);
    shark.save((err) => {
        if(err) {
            res.status(400).send('Unable to save your shark in the databse')
        } else {
            res.redirect('/sharks/getsharks');
        }
    })

}



exports.list = function(req,res) {
    Shark.find({}).exec((err,sharks) => {
        if(err) {
            res.send(500,err);
        } else {
            res.render('getsharks', {
                sharks : sharks
            });
        }
    })
}