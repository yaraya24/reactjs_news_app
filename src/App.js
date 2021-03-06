

import React from 'react'
import './App.css';
import Ripples from 'react-ripples' // use for buttons only
import { Route, Switch } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from './axios'
import { useHistory, useLocation } from 'react-router-dom'


// Importing components
import NavBarComponent from './components/Navbar'
import SideNavBarComponent from './components/SideNavBar'
import NewsCardComponent from './components/NewsCard';

//import pages
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import LoginForm from "./pages/LoginForm"
import MyAccount from './pages/MyAccount'
import GeneralPage from "./pages/General"
import SavedPage from "./pages/Saved"
import UserFeed from "./pages/UserFeed"
import SportsPage from "./pages/Sports"
import BusinessPage from "./pages/Business"
import CulturePage from './pages/Culture';
import TechnologyPage from "./pages/Technology"




function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(true)
  const location = useLocation();

  //WANTING TO REMOVE SEARCH IN LOGIN AND REGISTER PAGES
  React.useEffect(() => {
    if (location.pathname === '/login') {
      setShowSearch(true)
      console.log('LOL')
    }
  }, [location])
  const history = useHistory();

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }


  const handleLogout = () => {
    axiosInstance
      .get('dj-rest-auth/logout')
      .then((res) => {
        console.log(res.data)
        localStorage.removeItem('access_token')
        toast("Successfully logged out")
        window.location.href = '/login/';
        setLoginStatus(false)
      }, (error) => {
        console.log(error)
      }
      )
  }

  const handleNavbarOpen = () => {
    setNavbarOpen(prev => !prev)
    console.log(navbarOpen)
  }

  const checkLoginStatus = () => {
    if (localStorage.getItem('access_token')) {
      return true
    }
    else {
      return false
    }
  }
  const [loginStatus, setLoginStatus] = React.useState(checkLoginStatus())


  const handleLoginStatus = (status) => {
    setLoginStatus(status)
  }

  return (



    <div className="App">
      <ToastContainer limit={3} />

      <header className="App-header">
        <NavBarComponent showSearch={showSearch} handleLogout={handleLogout} loginStatus={loginStatus} navbarOpen={navbarOpen} setNavbarOpen={handleNavbarOpen} />

      </header>
      <div className="body-div">
        <SideNavBarComponent navbarOpen={navbarOpen} />
        <div className="news-container">
          <Switch>

            <Route exact path="/">

              <span className="page-title">Headlines</span>

              <GeneralPage />


            </Route>
            <Route path="/myfeed">

              <span className="page-title">MY  Feed</span>

              <UserFeed />
            </Route>
            <Route path="/sports">

              <span className="page-title">MY  SPORTS</span>

              <SportsPage />

            </Route>
            <Route path="/business">

              <span className="page-title">Business</span>

              <BusinessPage />

            </Route>
            <Route path="/culture">

              <span className="page-title">CULTURE</span>

              <CulturePage />

            </Route>
            <Route path="/technology">

              <span className="page-title">TECHNO</span>

              <TechnologyPage />

            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <LoginForm handleLoginStatus={handleLoginStatus} />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/myaccount">

              <MyAccount />
            </Route>
            <Route path="/saved">

              <SavedPage />

            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>







      </div>
      <footer>

      </footer>
    </div>

  );
}



export default App;
