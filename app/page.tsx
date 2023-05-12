import { Form } from '@/components/Form'
import { StorageItemsList } from '@/components/StorageItemsList'

export default function Home() {
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
