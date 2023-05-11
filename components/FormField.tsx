'use client'

import { FormFieldType } from '@/types'
import { useFormContext } from 'react-hook-form'

export const FormField: React.FC<FormFieldType> = ({ label, name, type }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        {...register(name, { valueAsNumber: type === 'number' })}
        type={type}
        name={name}
        id={name}
      />
      <br />
      {errors[name] ? <span>{errors[name]?.message}</span> : null}
    </div>
  )
}
