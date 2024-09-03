import { Link, Outlet } from 'react-router-dom'
import logo from '../../../public/logos/BytebotLight.png'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'

const RootLayout = () => {
  return (
    <div className="flex flex-col h-[30vh]">
      <header className="bg-opacity-70 backdrop-blur-sm flex items-center justify-between shadow-lg p-1 md:px-8 fixed w-full z-10">
        <Link to="/" className="block">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-[50px] md:h-[70px] w-auto"
            />
          </div>
        </Link>
        {/* <div className="flex-grow flex justify-center">
            <span className="text-white text-2xl md:text-3xl font-extrabold tracking-wide">
              ByteBite
            </span>
          </div> */}
        <div className="m-4 flex items-center">
          <SignedOut>
            <div className="text-white border border-transparent rounded-md px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox:
                    'h-10 w-10 border border-white rounded-full shadow-sm',
                },
              }}
            />
          </SignedIn>
        </div>
      </header>
      <main className="flex-grow pt-[90px]">
        {' '}
        {/* pt-[90px] to offset the height of the fixed navbar */}
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
