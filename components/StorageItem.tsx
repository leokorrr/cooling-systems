import { StorageItemOmitId } from '@/types'

export const StorageItem: React.FC<StorageItemOmitId> = ({
  title,
  description,
  price
}) => {
  return (
    <div className='flex justify-between px-5 h-[50px] items-center text-xl bg-grey-400 drop-shadow-md text-white rounded text-[18px] gap-5'>
      <div className='truncate'>{title}</div>
      <div className='truncate'>{description}</div>
      <div>{price}$</div>
    </div>
  )
}
