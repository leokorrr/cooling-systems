import { StorageItemOmitId } from '@/types'
import React from 'react'

export const StorageItem: React.FC<StorageItemOmitId> = ({
  title,
  description,
  price
}) => {
  return (
    <div className='flex justify-between px-5 h-[50px] items-center text-xl bg-grey-400 drop-shadow-md text-white rounded text-[18px]'>
      <div>{title}</div>
      <div>{description}</div>
      <div>{price}</div>
    </div>
  )
}
