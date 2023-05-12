'use client'

import { Form } from '@/components/Form'
import { StorageItemsList } from '@/components/StorageItemsList'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className='w-full flex justify-center mt-5'>
        <button
          className='bg-red-black text-white h-10 text-white w-[200px] rounded bg-grey-400 border-gray-300'
          onClick={() => signIn()}
        >
          Sign in With Github
        </button>
      </div>
    )
  }

  return (
    <main className='flex flex-col w-full justify-center mt-5'>
      <div className='flex w-full max-w-[1720px]'>
        <div className='w-[50%] flex justify-center'>
          <StorageItemsList />
        </div>
        <div className='w-[50%] flex justify-center'>
          <Form />
        </div>
      </div>
    </main>
  )
}
