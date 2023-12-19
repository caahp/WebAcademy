const express = require('express')
const app = express()

let users = [
  {id: 1, name: "Iron Man"},
  {id: 2, name: "Spider Man"},
  {id: 3, name: "Black Panther"},
  {id: 4, name: "Captain America"}
]

app.use(express.json())

app.get('/', function(req, res) {
  res.send('Welcome to our API')
})

app.get('/users', function(req, res) {
  res.send(users)
})

app.get('/user/:id', function(req, res) {
  const id = parseInt(req.params.id)
  const user = users.find(user => user.id === id)
  
  if(user){
    res.send(user)
  }
  else{
    res.status(404).json({message: "User not found"})
  }
})

app.post('/user', function(req,res) {
  const {name} = req.body
  const id = users.length + 1
  const newUser = {id,name}

  users.push(newUser)
  res.status(201).json(newUser)
})

app.put('/user/:id', function(req, res) {
  const id = parseInt(req.params.id)
  const user = users.find(user => user.id === id)

  if(user){
    user.name = req.body.name
    res.send(user)
  }
  else{
    res.status(404).json({message: "User not found"})
  }
})

app.delete('/user/:id', function(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id)
  users = users.filter(user => user.id !== id);
  res.status(200).json(users)

  if(!user){
    res.status(404).json({message: "User not found"})
  }
})

app.listen(3000)