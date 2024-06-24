import './App.css';
import Project from './components/Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContacUs';
import CareerPage from './components/CareerPage';
import AboutUsPage from './components/AboutUs';
import Admin from './components/Admin';
import LoginPage from './components/LoginPage';
import { CookiesProvider, useCookies } from 'react-cookie'
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [cookies, setCookie] = useCookies(['user'])
  const [posts, setPosts] = useState();

  function handleLogin(user) {
    setCookie('user', user, { path: '/' })
  }
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setPosts(response.data)
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <BrowserRouter>
      <div className="font-appContent flex flex-col gap-[20px] h-[100vh] justify-between">
        <NavBar  cookies={cookies.user}/>
        <Routes>
          <Route path='/' element={<Project posts={posts} />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          {/* <Route path='/admin' element={<LoginPage />} /> */}
          <Route path='/admin' element={
            <CookiesProvider>
              {cookies.user ? <Admin /> : <LoginPage onLogin={handleLogin} />}
            </CookiesProvider>
          } />
        </Routes>
        <Footer />
      </div >
    </BrowserRouter >
  );
}

export default App;
