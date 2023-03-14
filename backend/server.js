require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const projectRoutes = require('./routes/projects');

// express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes);

//projects section
app.use('/api/projects',projectRoutes);

// conntect to mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('listening on port 4000!')
        })
    })
    .catch((error) =>{
        console.log(error)
    })

// listen for express
