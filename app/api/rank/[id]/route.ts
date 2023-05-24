import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  try {
    const genreId = params.id;
    const res = await fetch(
      `${process.env.RANKING_API_URL}&genreId=${genreId}&applicationId=${process.env.APPLICATION_ID}&affiliateId=${process.env.AFFILIATE_ID}`
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(JSON.stringify("error"));
  }
}
