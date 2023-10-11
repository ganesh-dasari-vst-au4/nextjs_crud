"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

function AddTopic() {
  const router = useRouter()

  const [topic,setTopic]=useState({title:'',description:''})

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!topic.title||!topic.description) return alert('Fill all the fields!')
    axios.post('/api/topics',topic).then(res=>{
    router.push('/')
    })
  }

  const handleChange=(key,data)=>{
    setTopic((prev)=>{return{...prev,[key]:data}})
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
        onChange={(e)=>{handleChange('title',e.target.value)}}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Add Topic Title'/>

        <input 
        onChange={(e)=>{handleChange('description',e.target.value)}}
        className='border border-slate-500 px-8 py-2'
        type='text'
        placeholder='Add Topic Description'/>

        <button type='submit' className='bg-green-600 text-white py-3 px-6 w-fit'>
            Add Topic
        </button>
    </form>
  )
}

export default AddTopic