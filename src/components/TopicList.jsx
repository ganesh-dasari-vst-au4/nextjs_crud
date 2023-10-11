"use client"
import React, { use, useEffect, useState } from 'react'
import RemoveButton from './RemoveButton'
import Link from 'next/link'
import {HiOutlineTrash, HiPencilAlt} from "react-icons/hi"
import axios from 'axios'
function TopicList() {

  const [topics,setTopics] =useState([])
  const [isLoading,setIsLoading]=useState(false)

  const loadData=()=>{
    setIsLoading(true)
    axios.get('/api/topics').then(res=>{
      setTopics(res.data.data)
  }).finally(()=>{
    setIsLoading(false)
  })
  }
  useEffect(()=>{
   loadData()
  },[])

  const handleDelete =(id)=>{
    axios.delete(`/api/topics/${id}`).then(res=>{
      loadData()
    })
  }

  return (
   <> 
   {isLoading&&<div>
    <button type="button" className="bg-grey-500 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
   
  </svg>
  Processing...
</button>
    </div>}
   
   {topics && topics.length>0 && topics.map(elem=>( <div key={elem._id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
    <div>
        <h2 className='font-bold text-2xl'>{elem.title}</h2>
        <div>{elem.description}</div>
    </div>
  


    <div className='flex gap-2'>
    <button className='text-red-400' onClick={()=>{handleDelete(elem._id)}}>
        <HiOutlineTrash size={24}/>
    </button>
    <Link href={`/editTopic/${elem._id}`}>
        <HiPencilAlt size={24}/>
    </Link>
    </div>
    </div>
     )) }
     </>
  )
}

export default TopicList