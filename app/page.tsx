'use client'

import { Form } from '@/components/Form'
import { StorageItemsList } from '@/components/StorageItemsList'
import { signIn, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className='w-full flex justify-center mt-5'>
        <button
          className='text-white h-10 text-white w-[200px] rounded bg-grey-400 border-gray-300'
          onClick={() => signIn()}
        >
          Sign in With Github
        </button>
      </div>
    )
  }

  return (
    <main className='flex w-full justify-center mt-5'>
      <div className='flex w-full max-w-[1720px] flex-col-reverse md:flex-row'>
        <div className='md:w-[50%] w-full flex justify-center'>
          <StorageItemsList />
        </div>
        <div className='md:w-[50%] md:mb-0 mb-5 w-full flex justify-center'>
          <Form />
        </div>
      </div>
    </main>
  )
}
