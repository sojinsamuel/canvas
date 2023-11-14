import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let data = await request.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    payment_method_types: ["card"],
    mode: "payment",
    metadata: {
      userId: "1232342352",
    },
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  });

  // console.log("====================================");
  // console.log(JSON.stringify(session, null, 2));
  // console.log("====================================");

  return NextResponse.json(session);
}
