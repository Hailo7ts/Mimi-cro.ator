const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')

const app = express()

app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/mimi's-blog")

app.post('/login', (req, res) => {
    const {username, password} = (req.body)
    UserModel.findOne({username})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("Password is incorrect.")
            }
        }else{
            res.json('User name not registered.')
        }
    })
})

app.post('/register', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server is runing')
})


