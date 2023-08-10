import { stripe } from "@/app/services/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const session = await getSession({req: request})

  const stripeCustomer = await stripe.customers.create({
    email: session?.user?.email!
  })

  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    line_items: [{
      price: 'price_1NbKVCE39pg6ujjPmvVdylV3',
      quantity: 1
    }],
    mode: 'subscription',
    allow_promotion_codes: true,
    success_url: String(process.env.STRIPE_SUCCESS_URL),
    cancel_url: String(process.env.STRIPE_CANCEL_URL)
  })

  return response.status(200).json({ sessionId: stripeCheckoutSession.id })
}