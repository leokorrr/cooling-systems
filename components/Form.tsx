import { FormFieldType } from '@/types'
import { FormField } from './FormField'

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
  return (
    <form>
      {FORM_FIELDS.map((formField: FormFieldType) => (
        <FormField
          key={formField.name}
          label={formField.label}
          name={formField.name}
        />
      ))}
    </form>
  )
}
