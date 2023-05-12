import { StorageItem } from '@prisma/client'

type InputTypes = 'text' | 'number'

export interface FormFieldType {
  label: string
  name: string
  placeholder: string
  type: InputTypes
}

export type StorageItemOmitId = Omit<StorageItem, 'id'>
