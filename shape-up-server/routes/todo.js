const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');


// Todo 불러오기: post
router.post("/getTodo", (req, res) => {
    Todo.find({ familyID: req.body.family })
    .exec((err, todoInfo) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send({ success: true, todoInfo });
    });
});


// Todo 추가: post
router.post("/registerTodo", (req, res) => {
    let newtodo = new Todo(req.body)
    newtodo.save(
        (err, todoInfo) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true, todoInfo
            })
        }
    )
});

// Todo 수정: put
// Todo항목의 내용이 변경되거나 done이 true 또는 false로 변경되는 경우 사용
router.put("/editTodo", (req,res) => {
    let roleItem = req.body.todorole
    Todo.findOneAndUpdate({ _id: req.body._id }, {$push: {todorole: roleItem}})
    .exec(
        Todo.updateOne({ _id: req.body._id }, {$set: {todowork: req.body.todowork, done: req.body.done}}, (err, todoInfo) =>{
            if(err) return res.json({success:false, err})
            return res.status(200).json({
                success:true
            })
        })
    )
    
})

// Todo 삭제: delete

router.delete("/deleteTodo", (req,res)=>{
    Todo.deleteOne(req.body)
    .exec( 
        (err, todoInfo) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true
            })
        }
    )
});

module.exports = router;