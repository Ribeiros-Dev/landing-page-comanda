import {NextResponse} from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req) {
  const params = req.url.split('?')[1];
  const queryParams = params ? `?${new URLSearchParams(params)}` : '';

  const body = await req.json();

  const res = await fetch(`${baseUrl}/login${queryParams}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  return NextResponse.json(data, {status: res.status});
}
