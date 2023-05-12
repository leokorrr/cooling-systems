'use client'

import { FormFieldType, StorageItemOmitId } from '@/types'
import { FormField } from './FormField'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FORM_FIELDS, TELEMETRY_ENDPOINT } from '@/utils/constants'
import { swrFetcher } from '@/utils/swrFetcher'
import { useEffect, useState } from 'react'
import { mutate } from 'swr'

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z
    .number({ invalid_type_error: 'Price is required' })
    .positive('Price should be positive')
})

export const Form: React.FC = () => {
  const [isSubmitError, setIsSubmitError] = useState(false)

  const methods = useForm<StorageItemOmitId>({
    resolver: zodResolver(formSchema)
  })

  const { handleSubmit, formState, reset } = methods

  const onSubmit: SubmitHandler<StorageItemOmitId> = async (
    data: StorageItemOmitId
  ) => {
    setIsSubmitError(false)

    const res = await swrFetcher(TELEMETRY_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (res.status === 'fail') {
      setIsSubmitError(true)
    }
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful && !isSubmitError) {
      mutate(TELEMETRY_ENDPOINT)
      reset()
    }
  }, [reset, formState, isSubmitError])

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-[760px] px-4 w-full'>
        {isSubmitError ? (
          <div className='text-red-500 mb-4'>
            Something went wrong during form submission. Reload and try again
          </div>
        ) : null}
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
            className='h-10 text-white w-[100px] rounded bg-blue-400'
          >
            Add
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
