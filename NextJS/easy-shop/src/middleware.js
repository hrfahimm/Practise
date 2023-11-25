/** @format */

import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const { pathname } = request.nextUrl;
    try {
        let cookie = request.cookies.get("jwt-token")?.value;
        if (!cookie || cookie.startswith("Bearer")) {
            throw new Error("Invalid token");
        }
        const secret = new TextEncoder().encode(
            "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
        );
        await jwtVerify(cookie.split("Bearer")[1], secret);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(
            new URL(`/login?redirectUrl=${pathname}`, request.url)
        );
    }
};

export const config = {
    matcher: ["/profile/:path*", "/dashboard/:path*"],
};
