import { NextResponse,NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';


const client = new PrismaClient();

export async function POST(request:NextRequest) {
  const req = await request.json()  
  try {
    if (req !== null) {
      const data = await client.post.create({
        data: {
          title: req.data.title,
          content: req.data.content
        },
      });

      return NextResponse.json({ data });
    } else {
      console.log('Error: req.body is null');
      return NextResponse.json({ error: 'req.body is null' }, { status: 400 }); // 400 Bad Request 응답을 반환합니다.
    }
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 400 }); // 500 Internal Server Error 응답을 반환합니다.
  }
}

export async function GET(request:NextRequest) {
    
    const req = await request.json()  
    try {
      if (req !== null) {
        const data = await client.post.findFirst({
          where: {
            id: req.data.id,
          },
        });
  
        return NextResponse.json({ data });
      } else {
        console.log('Error: req.body is null');
        return NextResponse.json({ error: 'req.body is null' }, { status: 400 }); // 400 Bad Request 응답을 반환합니다.
      }
    } catch (error) {
      console.error('Error creating post:', error);
      return NextResponse.json({ error: 'An error occurred' }, { status: 400 }); // 500 Internal Server Error 응답을 반환합니다.
    }
  }

  export async function PUT(request:NextRequest) {
    const req = await request.json()  
    try {
      if (req !== null) {
        const data = await client.post.update({
            where:{
                id:req.data.id
            },
            data: {
                title: req.data.title,
                content: req.data.content
            },
        });
  
        return NextResponse.json({ data });
      } else {
        console.log('Error: req.body is null');
        return NextResponse.json({ error: 'req.body is null' }, { status: 400 }); // 400 Bad Request 응답을 반환합니다.
      }
    } catch (error) {
      console.error('Error creating post:', error);
      return NextResponse.json({ error: 'An error occurred' }, { status: 400 }); // 500 Internal Server Error 응답을 반환합니다.
    }
  }

  export async function DELETE(request:NextRequest) {
    const req = await request.json()  
    try {
      if (req !== null) {
        const data = await client.post.delete({
          where:{
            id:req.data.id
          }
        });
  
        return NextResponse.json({ data });
      } else {
        console.log('Error: req.body is null');
        return NextResponse.json({ error: 'req.body is null' }, { status: 400 }); // 400 Bad Request 응답을 반환합니다.
      }
    } catch (error) {
      console.error('Error creating post:', error);
      return NextResponse.json({ error: 'An error occurred' }, { status: 400 }); // 500 Internal Server Error 응답을 반환합니다.
    }
  }
  