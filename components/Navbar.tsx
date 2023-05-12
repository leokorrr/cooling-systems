'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

export const Navbar = () => {
  const { data: session } = useSession()

  return (
    <div className='w-full flex justify-between px-10 items-center h-[70px] bg-grey-400'>
      <div className='text-white text-xl font-semibold'>CoolingSystems</div>
      {session ? (
        <button
          className='bg-black text-white h-10 text-white w-[120px] rounded'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      ) : null}
    </div>
  )
}
