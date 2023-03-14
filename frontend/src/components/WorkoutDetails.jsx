import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

//import date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({workout}) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/projects/'+ workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type:'DELETE_WORKOUT', payload:json})
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Description:</strong> {workout.description.length>200? workout.description.slice(0,200)+'...':workout.description}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails