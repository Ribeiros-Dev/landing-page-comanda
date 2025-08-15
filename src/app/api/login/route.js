import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  if (body.username === "user" && body.password === "1234") {
    return NextResponse.json({ token: "fake-jwt-token-123" });
  } else {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }
}
