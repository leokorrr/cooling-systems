'use client'

import { StorageItem as StorageItemType } from '@prisma/client'
import useSWR from 'swr'
import { StorageItem } from './StorageItem'
import { swrFetcher } from '@/utils/swrFetcher'

export const StorageItemsList: React.FC = () => {
  const { data: storageItems, error, isLoading } = useSWR('/api/telemetry', swrFetcher)

  if (isLoading) {
    return <div className='text-white'>Loading</div>
  }

  if (error) {
    return (
      <div className='text-red-500'>
        Something went wrong during loading data. Reload and try again
      </div>
    )
  }

  if (storageItems.length === 0) {
    return <div className='text-white'>No data</div>
  }

  return (
    <div className='max-w-[760px] flex flex-col gap-3 px-4'>
      {storageItems.map((storageItem: StorageItemType) => (
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
