'use client'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/react'

export function SignInButton () {
  const {data: session} = useSession()

  console.log(session)
 
  return session ? (
    <button 
      type="button" 
      className="ml-auto flex items-center justify-between h-12 rounded-[3rem] bg-gray-850 px-6 py-0 text-white-50 font-bold hover:brightness-90 hover:transition"
    >    
      <FaGithub className="mr-3 text-[#04d361]"/>    
      Makiesse Morais
      <FiX className="ml-3 text-[#737380]"/>
    </button>
  ) : (
    <button 
      type="button" 
      className="ml-auto flex items-center justify-between h-12 rounded-[3rem] bg-gray-850 px-6 py-0 text-white-50 font-bold hover:brightness-90 hover:transition"
      onClick={() => signIn('github')}
    >    
      <FaGithub className="mr-3 text-[#eba417]"/>    
      Sign in with Github
    </button>
  )
}