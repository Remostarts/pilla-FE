import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { userRoles } from './constants/shared';

const { ADMIN, BUSINESS, PERSONAL } = userRoles;
// This function can be marked `async` if using `await` inside'
const hybridRoutes = [
  '/',
  '/sign-in',
  '/sign-in/admin',
  '/sign-in/business',
  '/sign-up',
  '/sign-up/admin',
  '/sign-up/business',
  '/sign-up/personal',
];
const rolesRedirect: Record<string, unknown> = {
  business: `${process.env.FRONTEND_URL}/business`,
  personal: `${process.env.FRONTEND_URL}/personal`,
  admin: `${process.env.FRONTEND_URL}/admin`,
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${process.env.FRONTEND_URL}/sign-in`);
  }

  const role = token?.role as string;

  if (
    (role === ADMIN && pathname.startsWith('/admin')) ||
    (role === BUSINESS && pathname.startsWith('/business')) ||
    // (role === PERSONAL && personalRoutes.includes(pathname))
    (role === PERSONAL && pathname.startsWith('/personal'))
  ) {
    return NextResponse.next();
  }

  if (pathname === '/' && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  // NextResponse.rewrite(request.
  NextResponse.rewrite(`${process.env.FRONTEND_URL}/sign-in`);

  return NextResponse.redirect(`${process.env.FRONTEND_URL}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // hybrid routes
    '/',
    '/sign-in/:page*',
    '/sign-up/:page*',
    // personal routes
    '/personal/:page*',

    // business routes
    '/business/:page*',
    // admin routes
    '/admin/:page*',
  ],
};
