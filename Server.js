const express = require('express')
const app = express()

const todos = []

app.use(express.static(__dirname + '/public'))

app.get('/showTodos',function (req,res) {
    res.send(todos)
})

app.get('/addTodos',function (req,res) {
    todos.push({
        task : req.query.task,
        done : false
    })
    res.redirect('/showtodos')
})

app.get('/deleteTodos',function (req,res) {
    todos.splice(parseInt(req.query.id),1)
    res.redirect('/showtodos')
})

app.get('/doTodos',function (req,res) {
    todos[req.query.id].done = true
    res.redirect('/showtodos')
})

app.listen(2220, function () {
    console.log("Server listening to port 2220")
})

