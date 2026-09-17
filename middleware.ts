import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isHomeSubdomain = host.startsWith("home.");

  if (isHomeSubdomain) {
    const incomingPath = request.nextUrl.pathname;
    const alreadyPrefixed = incomingPath.startsWith("/home-services-hub");
    if (!alreadyPrefixed) {
      const url = request.nextUrl.clone();
      url.pathname = `/home-services-hub${incomingPath === "/" ? "" : incomingPath}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
