const Project = require('../models/projectModel');
const mongoose = require('mongoose');

const getProjects = async (req,res)=>{
  const projects = await Project.find({}).sort({createdAt:-1})

  res.status(200).json(projects)
}

const createProject = async (req,res)=> {
  const {title, description} = req.body

  let emptyFields= []
  if(!title){emptyFields.push('title')}
  if(!description){emptyFields.push('description')}
  
  if(emptyFields.length > 0 ){
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }


  try {
    const project = await Project.create({title,description})
    res.status(200).json(project)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const deleteProject = async (req,res) => {
  const { id } = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Project'})
    }
    
  const project = await Project.findOneAndDelete({_id:id})
  if(!project){res.status(404).json({error:"No Such project"})}

  res.status(200).json(project)
}

module.exports = { 
  getProjects,
  createProject,
  deleteProject
}