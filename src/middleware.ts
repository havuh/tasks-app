import { PATHS } from '@core/settings/paths';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ACCESS_TOKEN_KEY } from './lib/utils/auth';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get(ACCESS_TOKEN_KEY);

  if (!token) {
    const authUrl = new URL(PATHS.authPaths.signIn, req.url);

    if (pathname !== PATHS.authPaths.signIn) {
      return NextResponse.redirect(authUrl);
    }

    return NextResponse.next();
  }

  const tasksUrl = new URL(PATHS.taskPaths.taskList, req.url);

  /**
   * Exclude all paths that are not part of the application
   * (Next.js internals, API routes, static files, public files)
   */
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.redirect(tasksUrl);
  }

  if (
    pathname.startsWith(PATHS.authPaths.auth) ||
    pathname === PATHS.taskPaths.home
  ) {
    return NextResponse.redirect(tasksUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /**
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (image files in the public directory)
     * - icons (icon files in the public directory)
     * - monitoring (tunnelRoute for sentry)
     * - 404 (404 page)
     * - 500 (500 page)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|images|icons|monitoring|404|500|favicon.ico|favicon-32x32.png).*)',
  ],
};
