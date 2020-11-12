const Rating = require('../models/rating');
const mongoose=require('mongoose');
const Recipe = require('../models/recipe');

exports.postRate= (req,res,next)=>{
    const user=new Rating({
        rate: req.body.rate,
        submissions : 1,
        userId: req.body.userId,
        recipeId:req.body.recipeId,
    });

    recipe = new Recipe()
    recipe.ranking.total + req.body.rate
    recipe.ranking.submissions + 1
    recipe.save();
    console.log(req.body);

    user.save().then(result=>{
        res.status(201).json({
            message: result
        });
    })
    .catch(err=>console.log(err));
};

exports.getRate= (req,res,next)=>{
    var id=req.params.id;
    Rating.findById(id)
    .exec()
    .then(data=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
};

exports.updateRate=(req,res,next)=>{
    
    var id= req.body.id;   
    Rating.updateOne({_id:mongoose.Types.ObjectId(id)},{$set: {rate:req.body.rate}})
    .then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));
    res.status(201).json({
        message:"Rating updated"
    });
};