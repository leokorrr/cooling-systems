'use client'

import { FormFieldType } from '@/types'
import { FormField } from './FormField'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'

interface Inputs {
  title: string
  description: string
  price: number
}

const FORM_FIELDS: FormFieldType[] = [
  {
    label: 'Title:',
    name: 'title'
  },
  {
    label: 'Description:',
    name: 'description'
  },
  {
    label: 'Price:',
    name: 'price'
  }
]

export const Form: React.FC = () => {
  const methods = useForm<Inputs>()

  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {FORM_FIELDS.map((formField: FormFieldType) => (
          <FormField
            key={formField.name}
            label={formField.label}
            name={formField.name}
          />
        ))}
        <button type='submit'>Submit</button>
      </form>
    </FormProvider>
  )
}
