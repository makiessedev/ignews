interface ButtonProps {
  priceId: string
}

export function SubscribeButton(props: ButtonProps) {
  return (
    <button
      type="button"
      className="w-[260px] h-[4rem] rounded-[2rem] bg-yellow-500 text-gray-900 text-xl font-bold hover:brightness-90 hover:transition mt-10"
    >
      Subscribe now
    </button>
  )
}