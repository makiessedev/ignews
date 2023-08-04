import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton () {
  return (
    <>
      <button 
        type="button" 
        className="ml-auto flex items-center justify-between h-12 rounded-[3rem] bg-gray-850 px-6 py-0 text-white-50 font-bold hover:brightness-90 hover:transition"
      >    
        <FaGithub className="mr-3 text-green-500"/>    
        Makiesse Morais
        <FiX className="ml-3"/>
      </button>
    </>
  )
}