import { NextResponse } from "next/server";

// should return current user

export async function GET(req: Request) {
    return NextResponse.json(["this is the user base endpoint"]);
}
