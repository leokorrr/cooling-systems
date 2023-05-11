import prisma from '@/lib/prisma'
import { StorageItem } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  try {
    const newStorageItem: StorageItem = await prisma.storageItem.create({
      data
    })

    return NextResponse.json(newStorageItem)
  } catch (error) {
    return NextResponse.json({ message: 'Error: Adding new storage item' })
  }
}
