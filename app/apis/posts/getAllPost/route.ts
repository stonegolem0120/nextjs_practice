import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const posts = await client.post.findMany(); // Retrieve all posts from the database

    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
