import { FormFieldType } from '@/types'

export const FORM_FIELDS: FormFieldType[] = [
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
