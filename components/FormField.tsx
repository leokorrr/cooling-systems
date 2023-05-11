import { FormFieldType } from '@/types'

export const FormField: React.FC<FormFieldType> = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input type='text' name={name} id={name} />
    </div>
  )
}
