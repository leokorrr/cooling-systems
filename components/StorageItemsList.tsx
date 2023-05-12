'use client'

import { StorageItem as StorageItemType } from '@prisma/client'
import useSWR from 'swr'
import { StorageItem } from './StorageItem'
import { swrFetcher } from '@/utils/swrFetcher'
import { TELEMETRY_ENDPOINT } from '@/utils/constants'

export const StorageItemsList: React.FC = () => {
  const { data: res, error, isLoading } = useSWR(TELEMETRY_ENDPOINT, swrFetcher)

  if (isLoading) {
    return <div className='text-white max-w-[760px] w-full px-4'>Loading...</div>
  }

  if (error || res?.status === 'fail') {
    return (
      <div className='text-red-500 max-w-[760px] w-full px-4'>
        Something went wrong during loading data. Reload and try again
      </div>
    )
  }

  if (res.data.length === 0) {
    return <div className='text-white max-w-[760px] w-full px-4'>No data</div>
  }

  return (
    <div className='max-w-[760px] w-full flex flex-col gap-3 px-4'>
      {res.data.map((storageItem: StorageItemType) => (
        <StorageItem
          key={storageItem.id}
          title={storageItem.title}
          description={storageItem.description}
          price={storageItem.price}
        />
      ))}
    </div>
  )
}
