import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req });
  console.log({ token });
  const url = req.nextUrl;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url)); // Redirect if not logged in
  }

  const userRole = token.role; // Extract role from token

  // Define access rules
  const roleBasedAccess = {
    "/admin": ["admin"], // Only admin can access
    "/dashboard": ["admin", "editor"], // Admin & Editor can access
  };

  // Check if the requested page is restricted
  const restrictedPages = Object.keys(roleBasedAccess);
  for (const page of restrictedPages) {
    if (url.pathname.startsWith(page)) {
      if (!roleBasedAccess[page].includes(userRole)) {
        return NextResponse.redirect(new URL("/unauthorized", req.url)); // Redirect if no access
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [], // Pages to protect
};
