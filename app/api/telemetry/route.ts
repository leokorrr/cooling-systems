import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { StorageItem } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const storageItemBodySchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().positive('Price should be positive')
})

export async function GET() {
  // Simple guard from not logged in users
  let session

  try {
    session = await getServerSession(authOptions)
  } catch (error) {
    return NextResponse.json(
      { message: 'Error: Something went wrong' },
      { status: 500 }
    )
  }

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Error: You are not logged in' }),
      { status: 401 }
    )
  }

  // Get data
  try {
    const storageItems: StorageItem[] = await prisma.storageItem.findMany({
      orderBy: [
        {
          id: 'desc'
        }
      ]
    })

    return NextResponse.json(storageItems)
  } catch (error) {
    return NextResponse.json(
      { message: 'Error: Getting storage items' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  // Simple guard from not logged in users
  let session

  try {
    session = await getServerSession(authOptions)
  } catch (error) {
    return NextResponse.json(
      { message: 'Error: Something went wrong' },
      { status: 500 }
    )
  }

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: 'Error: You are not logged in' }),
      { status: 401 }
    )
  }

  //  Get body
  let data

  try {
    data = await req.json()
  } catch (error) {
    return NextResponse.json(
      { message: 'Error: Something went wrong' },
      { status: 500 }
    )
  }

  // Validate data against schema
  const validationResult = storageItemBodySchema.safeParse(data)

  if (!validationResult.success) {
    return NextResponse.json({ message: 'Error: Bad payload' }, { status: 400 })
  }

  // Add data to Database
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
