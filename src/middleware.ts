import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/getproducts",
    "/api/payment",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
  ],
  debug: false,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
