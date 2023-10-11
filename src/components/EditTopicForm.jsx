"use client"
import { useParams, useRouter } from 'next/navigation'
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function EditTopicForm() {
    const params=useParams()
    const {id}=params
    const router = useRouter()

    const [topic,setTopic]=useState({newTitle:'',newDescription:''})
  
    const handleSubmit =(e)=>{
      e.preventDefault()
      if(!topic.newTitle||!topic.newDescription) return alert('Fill all the fields!')
      axios.put(`http://localhost:3000/api/topics/${id}`,topic).then(res=>{
      router.push('/')
      })
    }
  
    const handleChange=(key,data)=>{
      setTopic((prev)=>{return{...prev,[key]:data}})
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/topics/${id}`).then(res=>{
            if(res.data.data){
                setTopic({
                    newTitle:res.data.data.title,
                    newDescription:res.data.data.description
                })
            }
        })
    },[id])

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input 
            onChange={(e)=>{handleChange('newTitle',e.target.value)}}
            value={topic.newTitle}
            className='border border-slate-500 px-8 py-2'
            type='text'
            placeholder='Update Topic Title'/>
    
            <input 
            onChange={(e)=>{handleChange('newDescription',e.target.value)}}
            value={topic.newDescription}
            className='border border-slate-500 px-8 py-2'
            type='text'
            placeholder='Update Topic Description'/>
    
            <button type='submit' className='bg-green-600 text-white py-3 px-6 w-fit'>
                Update Topic
            </button>
        </form>
      )
}

export default EditTopicForm