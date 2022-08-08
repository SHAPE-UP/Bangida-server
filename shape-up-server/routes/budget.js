const express = require('express');
const router = express.Router();
const { Budget } = require('../models/Budget');


// 전체 예산서 불러오기: post
router.post("/getBudget", (req, res) => {
    Budget.find({ familyID: req.body.family })
    .exec((err, budget) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send({ success: true, budget });
    });
});


// 예산서 등록: post
router.post("/registerBudget", (req, res) => {

    let budgetItem = req.body.item
    console.log(budgetItem);
    Budget.findOneAndUpdate({ familyID: req.body.family }, {$push: {list: budgetItem}})
    let newbudget = new Budget(req.body)
    newbudget.save(
        (err, budgetInfo) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true,
                budgetInfo
            })
        }
    )
});

// 예산서 삭제: delete

router.delete("/deleteBudget", (req,res)=>{
    Budget.findOneAndDelete({ familyID: req.body.family })
    Budget.deleteOne(req.body)
    .exec( 
        (err, budgetInfo) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true,
                budgetInfo
            })
        }
    )
});

module.exports = router;