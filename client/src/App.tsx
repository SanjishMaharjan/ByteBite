import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/Homepage'
import ChatPage from './pages/chatPage/Chatpage'
import RootLayout from './layout/rootLayout/RootLayout'
import SideBarLayout from './layout/sideBarLayout/SideBarLayout'
import SettingPage from './pages/settingPage/Settingpage'
import HistoryPage from './pages/historyPage/HistoryPage'
import NoPageFound from './pages/noPageFound/NoPageFound'
import SignInPage from './pages/signInPage/SignInPage'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes that use both RootLayout and SideBarLayout */}
        <Route index element={<HomePage />} />
        <Route path="/" element={<RootLayout />}>
          <Route element={<SideBarLayout />}>
            <Route path="history" element={<HistoryPage />} />
            <Route path="dashboard/chat/:chatId" element={<ChatPage />} />
            <Route path="settings" element={<SettingPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            {/* Add more routes here if needed */}
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
