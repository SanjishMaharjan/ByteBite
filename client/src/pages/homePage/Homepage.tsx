import { useNavigate } from 'react-router-dom'
import logo from '../../../public/logos/BytebotLight.png'
import bot from '../../../public/bot.png'
import bgPng from '../../../public/bg.png'
import OrbitBg from '../../../public/orbital.png'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'

const Homepage = () => {
  const navigate = useNavigate()

  const handleNavigateToChat = () => {
    navigate('/dashboard/chat/:chatId')
  }

  return (
    <div
      className="h-[100vh] flex flex-row gap-6 items-center justify-center p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${OrbitBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Add this line
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-2xl w-2/3 p-6 md:p-8">
        <img
          src={logo}
          alt="logo"
          className="h-32 w-auto mx-auto mb-2 md:h-42"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-gradient from-blue-500 via-indigo-600 to-purple-700 mb-4 md:mb-6 text-center max-w-3xl mx-auto">
          ByteBite
        </h1>
        <h2 className="text-xl md:text-2x text-gray-100 mb-4 md:mb-6 text-center max-w-3xl mx-auto font-bold">
          Bytes that bite... Into Productivity
        </h2>
        <h3 className="text-sm md:text-lg text-gray-100 mb-4 md:mb-6 text-center">
          ByteBite is your AI assistant for all your needs. It is designed to
          help you with your daily tasks and make your life easier.
        </h3>

        <div className="flex justify-center mt-4">
          <SignedOut>
            <SignInButton>
              <button className="bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button
              onClick={handleNavigateToChat}
              className="bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Go to Chat
            </button>
          </SignedIn>
        </div>
      </div>

      <div
        className="max-w-2xl w-2/3 bg-center bg-cover shadow-lg rounded-xl p-6 md:p-8 moving-background"
        style={{ backgroundImage: `url(${bgPng})` }}
      >
        <img
          src={bot}
          alt="logo"
          className="h-32 w-auto mx-auto mb-2 md:h-64 bouncing-image"
        />
      </div>
    </div>
  )
}

export default Homepage
