import Image from "next/image";
import { SubscribeButton } from "./components/SubscribeButton";
import { stripe } from "./services/stripe";

export default async function Home() {
  const price = await stripe.prices.retrieve('price_1NbKVCE39pg6ujjPmvVdylV3')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Number(price.unit_amount) / 100)
  }

  return (
    <main className="max-w-[1120px] mx-auto px-8 h-[calc(100vh-5rem)] flex items-center justify-between">
      <section className="max-w-[600px]">
        <span className="text-2xl font-bold leading-[4.5rem]">Hey, Welcome</span>
        <h1 className="text-7xl font-black mt-10">
          News about the 
          <span className="text-cyan-500">
          {' '}React{' '}
          </span> 
          World.
        </h1>
        <p className="text-2xl mt-6">
          Get access to all the publications <br />
          <span className="text-cyan-500 font-bold">for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
      </section>
      <Image src='/avatar.svg' alt="Girl coding" width="336" height="521"/>
    </main>
  )
}
