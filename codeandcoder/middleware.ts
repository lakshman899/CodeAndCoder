// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public routes যেখানে authentication প্রয়োজন নেই
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/contact"
]);

export default clerkMiddleware(async (auth, request: NextRequest) => {
  const { userId } = await auth();
  
  // যদি user logged in না থাকে এবং route টি public না হয়
  if (!userId && !isPublicRoute(request)) {
    // User কে sign-in page-এ redirect করুন
    const signInUrl = new URL("/sign-in", request.url);
    
    // User যেই page-এ যেতে চেয়েছিল, sign-in成功后 সেখানে redirect করার জন্য
    signInUrl.searchParams.set("redirect_url", request.url);
    
    return NextResponse.redirect(signInUrl);
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};