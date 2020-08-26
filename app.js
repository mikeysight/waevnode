const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/waevDB", { useNewUrlParser: true, useUnifiedTopology: true })
const waevSchema = new mongoose.Schema({
    filename: String,
    data: Buffer, 
    transcript: String,
},
{timestamps:true})

const Waev = mongoose.model("Waev", waevSchema)

const waev = new Waev({
    filename: "test.mp3",
    data: null,
    transcript: "testing1234"
})

// waev.save()

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const User = mongoose.model("User", userSchema)

const user = new User({
    name: "Michael",
    age: 29
})

// user.save()

Waev.find(function(err, waevs){
    if (err){
        console.log(err)
    } else {
        console.log (waevs)
    }
})