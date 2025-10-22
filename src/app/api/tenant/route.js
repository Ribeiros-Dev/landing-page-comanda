import {NextResponse} from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req) {
  const body = await req.json();

  try {
    const res = await fetch(`${baseUrl}/p/tenant-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    return NextResponse.json(data, {status: res.status});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500});
  }
}
