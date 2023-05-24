import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.SERACH_API_URL}&genreId=0&applicationId=${process.env.APPLICATION_ID}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(JSON.stringify("error"));
  }
}
