'use client'

import { Form } from '@/components/Form'
import { StorageItemsList } from '@/components/StorageItemsList'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <>
        <button className='bg-red-500 text-white' onClick={() => signIn()}>SignIn</button>
      </>
    )
  }

  return (
    <main className='flex w-full justify-center mt-5'>
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
