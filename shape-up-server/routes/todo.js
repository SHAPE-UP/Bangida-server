const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');


// Todo 목록 불러오기: post
// req.body: 가족ID, 날짜
router.post("/getTodo", (req, res) => {
    let date = req.body.date // 몽고디비 형식으로 변환 필요
    Todo.find({ familyID: req.body.familyID,
    //    date: date
    })
    .exec((err, todoInfo) => {
        if (err) return res.status(400).send(err);
        return res.status(200).send({ success: true, todoInfo });
    });
});


// Todo 추가: post
router.post("/registerTodo", (req, res) => {
    let todorole = req.body.todorole ? req.body.todorole : null // 기본값 없음
    let todoref = req.body.todoref ? req.body.todoref : 0 // 기본값 0
    let todotime = req.body.todotime ? req.body.todotime : null // 기본값 없음
    let date = req.body.date // 몽고디비 형식으로 변환 필요
    let newtodo = new Todo({
        familyID: req.body.familyID,
        //date: date,
        todowork: req.body.todowork,
        todorole: todorole,
        todotime: todotime,
        todoref: todoref
    })
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
// Todo항목의 내용 변경 시
router.put("/editTodo", (req,res) => {
    let date = req.body.date // 몽고디비 형식으로 변환 필요
    let todotime = req.body.todotime // 몽고디비 형식으로 변환 필요
    Todo.updateOne({ _id: req.body._id }, 
        {$set: {
            //date: date
            todowork: req.body.todowork,
            todorole: req.body.todorole,
            todoref: req.body.todoref,
            //todotime: todotime
        }})
    .exec((err, todoInfo) => {
        if(err) return res.json({success:false, err})
        return res.status(200).json({
            success:true
        })
    });
});

// Todo 수행: post
// req.body: 수행 시 done = true, 수행 해제 시 done = false
router.post("/doneTodo", (req, res) => {
    Todo.updateOne({ _id: req.body._id }, {$set: { done: req.body.done }})
    .exec( 
        (err, todoInfo) => {
            if(err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true
            })
        }
    )
})


// Todo 삭제: delete
// body: Todo 항목의 ID
router.delete("/deleteTodo", (req,res)=>{
    Todo.deleteOne({ _id: req.body._id })
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