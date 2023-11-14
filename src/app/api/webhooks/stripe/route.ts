import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  console.log("====================================");
  console.log(JSON.stringify(session, null, 2));
  console.log("====================================");

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    console.log("====================================");
    console.log("User id", session?.metadata?.userId);
    console.log("====================================");
  }

  if (event.type === "payment_intent.payment_failed") {
    console.log("====================================");
    console.log("Payment failed");
    console.log("====================================");
  }

  if (event.type === "payment_intent.succeeded") {
    console.log("====================================");
    console.log("Payment succeeded");
    console.log("User id", session?.metadata?.userId);

    console.log("====================================");
  }

  if (event.type === "payment_intent.created") {
    console.log("====================================");
    console.log("Payment created");
    console.log("====================================");
  }

  if (event.type === "customer.created") {
    console.log("====================================");
    console.log("Customer created");
    console.log("====================================");
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
  }

  return new NextResponse(null, { status: 200 });
}
