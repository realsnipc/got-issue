import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

export default function Navbar() {

  const links= [
    {label:'Issues',
  href:'/issues'},{
    label:"Dashboard",
    href:"/dashboard"
  }
  ]
  return (
    <nav className="flex gap-20 py-4  border-b-2 border-gray-200 items-center">
        <Link href={"/"} className='ml-5 hover:text-zinc-600 color-red-100'><AiFillBug size={'1.5rem'} /></Link>
        <ul className='flex gap-10'>
          {
            links.map((links)=>(
              <Link href={links.href} key={links.href} className='hover:text-zinc-500'>{links.label}</Link>
            ))
          }
        </ul>
       
    </nav>
  )
}
