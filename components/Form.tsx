'use client'

import { FormFieldType } from '@/types'
import { FormField } from './FormField'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface Inputs {
  title: string
  description: string
  price: number
}

const FORM_FIELDS: FormFieldType[] = [
  {
    label: 'Title:',
    name: 'title',
    type: 'text',
    placeholder: 'Provide item title...'
  },
  {
    label: 'Description:',
    name: 'description',
    type: 'text',
    placeholder: 'Provide item description...'
  },
  {
    label: 'Price:',
    name: 'price',
    type: 'number',
    placeholder: 'Provide item price...'
  }
]

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z
    .number({ invalid_type_error: 'Price is required' })
    .positive('Price should be positive')
})

export const Form: React.FC = () => {
  const methods = useForm<Inputs>({ resolver: zodResolver(formSchema) })

  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-[760px] px-4'>
        {FORM_FIELDS.map((formField: FormFieldType) => (
          <FormField
            key={formField.name}
            label={formField.label}
            name={formField.name}
            type={formField.type}
            placeholder={formField.placeholder}
          />
        ))}
        <div className='flex flex-row-reverse'>
          <button
            type='submit'
            className='h-10 bg-black text-white w-[100px] rounded bg-blue-400'
          >
            Add
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
