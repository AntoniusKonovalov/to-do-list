import { middleware } from "@/middleware";
import { NextResponse, NextRequest } from "next/server";

export default function customMiddleware(req: NextRequest) {

    const response = middleware(req);

    if (req.method === 'GET') {
        return NextResponse.json({ message: 'GET' })
    } else {
        return NextResponse.json({ message: 'Method not allowed'})
    }
}