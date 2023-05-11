'use client'

import { FormFieldType } from '@/types'
import { useFormContext } from 'react-hook-form'

export const FormField: React.FC<FormFieldType> = ({ label, name }) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input {...register(name, { required: true })} type='text' name={name} id={name} />
      <br />
      {errors[name] && <span>This field is required</span>}
    </div>
  )
}
