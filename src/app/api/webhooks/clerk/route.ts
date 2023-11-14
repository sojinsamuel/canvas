/* eslint-disable camelcase */
import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.NEXT_CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new SVIX instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id, email_addresses } = evt.data;

    const dbUser = await db.user.create({
      data: {
        id,
        email: email_addresses[0].email_address,
      },
    });
    console.log("====================================");
    console.log(dbUser);
    console.log("====================================");
    // Create a new user in your database
    // const mongoUser = await createUser({
    //   clerkId: id,
    //   name: `${first_name}${last_name ? ` ${last_name}` : ""}`,
    //   username: username!,
    //   email: email_addresses[0].email_address,
    //   picture: image_url,
    // });

    return NextResponse.json({ message: "OK", user: dbUser });
  } else if (eventType === "user.updated") {
    const { id, email_addresses } = evt.data;

    const dbUser = await db.user.update({
      where: {
        id,
      },
      data: {
        email: email_addresses[0].email_address,
      },
    });

    console.log("====================================");
    console.log(dbUser);
    console.log("====================================");

    // Update user email in your database
    // const mongoUser = await updateUser({
    //   clerkId: id,
    //   updateData: {
    //     name: `${first_name}${last_name ? ` ${last_name}` : ""}`,
    //     username: username!,
    //     email: email_addresses[0].email_address,
    //     picture: image_url,
    //   },
    //   path: `/profile/${id}`,
    // });

    return NextResponse.json({ message: "OK", user: dbUser });
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    const dbUser = await db.user.delete({
      where: {
        id,
      },
    });

    // const deletedUser = await deleteUser({
    //   clerkId: id!,
    // });

    return NextResponse.json({ message: "OK", user: dbUser });
  }

  return new Response("", { status: 201 });
}
