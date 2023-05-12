'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

export const Navbar = () => {
  const { data: session } = useSession()

  return (
    <div className='w-full flex justify-between px-10 items-center h-[70px] bg-grey-400 text-xl font-semibold'>
      <div className='text-white'>CoolingSystems</div>

    </div>
  )
}
