import Stripe from "stripe";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs";

export async function POST(request: any) {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return new NextResponse("userId not found", { status: 401 });
  }
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
    mode: "payment",
    customer_email: user?.emailAddresses[0].emailAddress,
    client_reference_id: userId,
    // subscription_data: {
    //   metadata: {
    //     userId,
    //   },
    // },
    success_url: process.env.NEXT_PUBLIC_APP_URL,
    cancel_url: process.env.NEXT_PUBLIC_APP_URL,
  });

  // console.log("====================================");
  // console.log(JSON.stringify(session, null, 2));
  // console.log("====================================");

  return NextResponse.json(session);
}
