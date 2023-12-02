/** @format */

import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
    const { pathname } = request.nextUrl;
    const isPath = (path) => pathname.startsWith(path);
    try {
        let cookie = request.cookies.get("jwt-token")?.value;
        if (!cookie || !cookie.startsWith("Bearer")) {
            throw new Error("Invalid token");
        }
        const secret = new TextEncoder().encode(
            "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
        );
        await jwtVerify(cookie.split("Bearer ")[1], secret);
        if (isPath("/login") || isPath("/signup")) {
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    } catch (error) {
        if (isPath("/login") || isPath("/signup")) {
            return NextResponse.next();
        }
        return NextResponse.redirect(
             new URL(`/login?redirectUrl=${pathname}`, request.url)
        );
    }
};

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/profile/:path*",
        "/dashboard/:path*",
        "/login/:path*",
        "/signup/:path*",
    ],
};
