const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const router = express.Router()

// Get ALL workouts 
router.get('/',getWorkouts)

// Get a Single Workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// Delete a new workout
router.delete('/:id',deleteWorkout)
//Update Workout
router.patch('/:id',updateWorkout)


module.exports = router