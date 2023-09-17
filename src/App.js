import './App.css'
import Header from './components/Header/Header.jsx'
import Main from './pages/main/Main.jsx'
import Login from './pages/login/Login.jsx'
import Register from "./pages/register/Register.jsx";
import User from './pages/user/User.jsx'
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from './components/hoc/PrivateRoute'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPostsThunk } from './redux/actions/postsActions';

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPostsThunk())
  }, [])
  

  return (
    <div className="content__container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
