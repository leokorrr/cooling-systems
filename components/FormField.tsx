'use client'

import { FormFieldType } from '@/types'
import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export const FormField: React.FC<FormFieldType> = ({
  label,
  name,
  type,
  placeholder
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div>
      <label htmlFor={name} className='text-white text-lg mb-4'>
        {label}
      </label>
      <div className='mt-3 mb-5'>
        <input
          {...register(name, { valueAsNumber: type === 'number' })}
          className='text-white text-lg w-full bg-grey-400 border-grey-300 rounded h-[50px] px-4 text-base focus-visible:outline-0'
          placeholder={placeholder}
          type={type}
          name={name}
          id={name}
        />
        {errors[name] ? (
          <div className='text-red-500 mt-2'>{errors[name]?.message as string}</div>
        ) : null}
      </div>
    </div>
  )
}
