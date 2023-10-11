"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link href={'/'} className='text-white font-bold'>NextJS CRUD App.</Link>
        {pathname && pathname==='/'?(<Link href={'/addTopic'} className='bg-white p-2'>Add Topic</Link>):(<Link href={'/'} className='bg-white p-2'>Cancel</Link>)}
        
    </nav>
  )
}

export default Navbar