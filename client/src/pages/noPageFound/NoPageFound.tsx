import { Link } from 'react-router-dom'
import NotFoundImg from '../../../public/page-not-found.svg'

const NoPageFound = () => {
  return (
    <div className="flex items-center flex-col gap-3 justify-center h-[84vh]">
      <img src={NotFoundImg} alt="logo" className="w-1/3" />
      <h1 className="text-4xl font-bold mt-5">404 - Page Not Found</h1>
      <p className="text-2xl mb-5">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white font-bold py-3 px-6 rounded-lg shadow-md">
          Go to Home
        </button>
      </Link>
    </div>
  )
}

export default NoPageFound
