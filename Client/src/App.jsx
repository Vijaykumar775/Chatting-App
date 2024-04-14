import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectRoute from './Components/auth/ProtectRoute';
import { LayoutLoader } from './Components/layout/Loaders';
import Notfound from './Pages/Notfound';
import AdminLogin from './Pages/admin/AdminLogin';

const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Group = lazy(() => import("./Pages/Group"));
const Dashboard = lazy(() => import("./Pages/admin/Dashboard"));
const UsersManagement = lazy(() => import("./Pages/admin/UsersManagement"));
const ChatManagement = lazy(() => import("./Pages/admin/ChatManagement"));
const MessageMangement = lazy(() => import("./Pages/admin/MessageMangement"));

let user = true;

const App = () => {
  return <BrowserRouter>

    <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/group' element={<Group />} />
          <Route path='/chat/:chatId' element={<Chat />} />
        </Route>
        <Route path='/login' element={<ProtectRoute user={!user} redirect='/'><Login /></ProtectRoute>} />
        <Route path='/admin' element={<AdminLogin />}/>
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path= '/admin/usersmanagement' element={<UsersManagement />}/>
        <Route path='/admin/chatsmanagement' element={<ChatManagement />}/>
        <Route path='/admin/messagesmanagement' element={<MessageMangement />}/>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </Suspense>


  </BrowserRouter>
}

export default App
