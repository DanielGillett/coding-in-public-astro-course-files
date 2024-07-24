import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  console.log("in midldeware");
  return new Response(JSON.stringify({ success: true }));
});
