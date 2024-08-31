import { useState } from 'react'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { IoChatbox, IoHomeSharp, IoSettings } from 'react-icons/io5'
import {
  MdExplore,
  MdOutlineHistory,
  MdSpaceDashboard,
  MdWorkspacePremium,
} from 'react-icons/md'
import { Link, Outlet, useLocation } from 'react-router-dom'

const SideBarLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const location = useLocation()

  // Function to determine if a link is active
  const isActive = (path: string) => location.pathname === path

  return (
    <div className="flex h-[84vh]">
      {/* Side Menu */}
      <nav
        className={`bg-gray-800 text-white p-4 rounded-xl flex flex-col transition-all duration-300 ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1
            className={`text-2xl font-bold ${isCollapsed ? 'hidden' : 'block'}`}
          >
            Dashboard
          </h1>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white"
          >
            {isCollapsed ? (
              <MdSpaceDashboard size={24} />
            ) : (
              <IoIosArrowDropleftCircle size={24} />
            )}
          </button>
        </div>

        <ul className="flex flex-col gap-5 mt-3 flex-1">
          {[
            // { to: '/', label: 'Home', icon: <IoHomeSharp size={24} /> },
            {
              to: '/dashboard/chat/:chatId',
              label: 'Create a new Chat',
              icon: <IoChatbox size={24} />,
            },
            {
              to: '/',
              label: 'Explore about Bytebite',
              icon: <MdExplore size={24} />,
            },
            {
              to: '/history',
              label: 'History',
              icon: <MdOutlineHistory size={24} />,
            },
            {
              to: '/settings',
              label: 'Settings',
              icon: <IoSettings size={24} />,
            },
          ].map((item) => (
            <li key={item.to} className="mb-2">
              <Link
                to={item.to}
                className={`flex items-center hover:text-gray-300 ${
                  isActive(item.to) ? 'bg-[#7860f3] rounded-xl p-1 ' : ''
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {isCollapsed ? (
                  <span className="sr-only">{item.label}</span>
                ) : (
                  <span>{item.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Upgrade Plan at the bottom */}
        <div className="mt-auto">
          <Link
            to="/upgrade"
            className={`flex items-center hover:text-gray-300 ${
              isActive('/upgrade') ? 'bg-gray-700 rounded-lg' : ''
            }`}
          >
            <span className="mr-2">
              <MdWorkspacePremium size={24} />
            </span>
            {isCollapsed ? (
              <span className="sr-only">Upgrade Plan</span>
            ) : (
              <div>
                <span className="font-bold">Upgrade Plan</span>
                <p className="text-sm">Get Unlimited Access</p>
              </div>
            )}
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default SideBarLayout
