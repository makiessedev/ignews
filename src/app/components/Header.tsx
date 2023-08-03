import Image from 'next/image'
import Link from 'next/link'
import { SignInButton } from './SignInButton'

export function Header () {
  return (
    <>
      <header className='h-20 border-b border-b-gray-800'>
        <div className='max-w-[1120px] h-20 mx-auto px-8 flex items-center'>
          <Image src="/logo.svg" alt="ig.news logo" width="110" height="31" />
          <nav className='ml-20 h-20'>
            <Link 
              href='/' 
              className='inline-block relative px-2 h-20 leading-[5rem] text-gray-300 hover:text-white-50 transition active:after:h-[3px] active:after:rounded-t-[3px] active:after:w-full active:after:absolute active:after:bottom-[1px] active:after:left-0 active:after:bg-yellow-500 active:text-white-50 active:font-bold'
            >
              Home
            </Link>
            <Link href='posts' className='inline-block relative px-2 h-20 leading-[5rem] text-gray-300 hover:text-white-50 transition ml-8'>Posts</Link>
          </nav>
          <SignInButton />
        </div>
      </header>
    </>
  )
}