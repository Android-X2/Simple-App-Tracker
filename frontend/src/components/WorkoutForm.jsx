import React, {useState} from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const {dispatch} = useWorkoutsContext()
  const [title, setTitle] = useState('')
  const [description, setDescription]  = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, description}

    const response = await fetch('/api/projects',{
      method:"POST",
      body: JSON.stringify(workout),
      headers: {
        'Content-Type':'application/json'
      }
    })

    const json = await response.json()
    console.log(json)
    if(!response.ok){
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if(response.ok){
      setError(null)
      setTitle('')
      setDescription('')
      setEmptyFields([])
      console.log('New workout added', json)
      dispatch({type:'CREATE_WORKOUT', payload:json})
    }
  }
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Project</h3>
      <label>Project Title:</label>
      <input 
        type="text"
        onChange={(e)=>setTitle(e.target.value)}
        value = { title }
        className = { emptyFields.includes('title')? 'error': ''}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e)=>setDescription(e.target.value)}
        value = { description }
        className = { emptyFields.includes('load')? 'error': ''}
      />
      <button> Add Project</button>
      {error && <div className="error">{error}</div> }
      <p>*Click on project to view bugs*</p>
    </form>
    
  )
}

export default WorkoutForm