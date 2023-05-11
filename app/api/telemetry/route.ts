import prisma from '@/lib/prisma'
import { StorageItem } from '@prisma/client'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const storageItemBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number()
})

export async function POST(req: Request) {
  const data = await req.json()

  const validationResult = storageItemBodySchema.safeParse(req.body)

  if (!validationResult.success) {
    return NextResponse.json({ message: 'Error: Bad payload' }, { status: 400 })
  }

  try {
    const newStorageItem: StorageItem = await prisma.storageItem.create({
      data
    })

    return NextResponse.json(newStorageItem)
  } catch (error) {
    return NextResponse.json(
      { message: 'Error: Adding new storage item' },
      { status: 500 }
    )
  }
}
