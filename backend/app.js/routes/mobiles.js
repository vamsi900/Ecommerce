var express = require('express');
var router = express.Router();
var Mobile = require('../DB/schemas/mobile');

router.post('/postMobile', function(req, res, next) {

    var mobile = new Mobile(req.body)
    
    mobile.save((err,data) => {
        if(err){
            res.send(err);
        } else {
            res.send({'mobile' : data});
        }
    })
    });


router.get('/getMobile', function(req, res,){ 

    Mobile.find({},function (err,data){
        if (err) {
            res.json({err});
            }
            else{
            res.json(data);   
            }
        });
    });

module.exports = router;