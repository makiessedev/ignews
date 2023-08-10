'use client'

import { signIn, useSession } from "next-auth/react"
import { getStripeJs } from "../services/stripe-js"

export function SubscribeButton() {
  const { data: session } = useSession()

  async function handleSusbscribe() {
    if(!session) {
      signIn('github')
      return
    }

    try {
      const response = await fetch('api/subscribe', { method: 'POST' })
      const json = await response.json()
      const { sessionId } = json

      const stripe = await getStripeJs()

      await stripe?.redirectToCheckout({sessionId})

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      type="button"
      className="w-[260px] h-[4rem] rounded-[2rem] bg-yellow-500 text-gray-900 text-xl font-bold hover:brightness-90 hover:transition mt-10"
      onClick={handleSusbscribe}
    >
      Subscribe now
    </button>
  )
}