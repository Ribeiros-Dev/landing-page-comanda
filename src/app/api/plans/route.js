import {NextResponse} from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req) {
  const params = req.nextUrl.searchParams;

  try {
    const res = await fetch(`${baseUrl}/p/plans?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    const data = await res.json();
    return NextResponse.json(data, {status: res.status});
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500});
  }
}
