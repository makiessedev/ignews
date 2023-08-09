import { stripe } from "../services/stripe"

export const revalidate = 60 * 60 * 24 // 24 hours

export async function Price() {
  const price = await stripe.prices.retrieve('price_1NbKVCE39pg6ujjPmvVdylV3')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(price.unit_amount) / 100)
  }

  return (
    <span className="text-cyan-500 font-bold">for {product.amount} month</span>
  )
}