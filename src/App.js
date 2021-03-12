

import React from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import axiosInstance from './axios'



// Importing components
import NavBarComponent from './components/Navbar'
import SideNavBarComponent from './components/SideNavBar'


//import pages

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
import SearchPage from "./pages/Search"



function App() {
  // States for navigation bar status and search query
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')



  const handleLogout = () => {
    // Function that will logout the user and remove the token localstorage
    axiosInstance
      .get('dj-rest-auth/logout')
      .then((res) => {
        console.log(res.data)
        localStorage.removeItem('access_token')
        toast("Successfully logged out")
        window.location.href = '/';
        setLoginStatus(false)
      }, (error) => {
        console.log(error)
      }
      )
  }

  const handleNavbarOpen = () => {
    // Sets the navbar status once hamburger is clicked
    setNavbarOpen(prev => !prev)
  }

  const searchHandle = (query) => {
    //Sets the search query from the search bar
    setSearchQuery(query)

  }

  React.useEffect(() => {
    console.log(searchQuery)


  }, [searchQuery])

  const checkLoginStatus = () => {
    //determines if user is logged in or not
    if (localStorage.getItem('access_token')) {
      return true
    }
    else {
      return false
    }
  }
  const [loginStatus, setLoginStatus] = React.useState(checkLoginStatus())


  const handleLoginStatus = (status) => {
    //Function to update login status
    setLoginStatus(status)
  }

  return (
    <div className="App">
      <ToastContainer limit={3} />

      <header className="App-header">
        <NavBarComponent searchHandle={searchHandle} handleLogout={handleLogout} loginStatus={loginStatus} navbarOpen={navbarOpen} setNavbarOpen={handleNavbarOpen} />

      </header>
      <div className="body-div">
        <SideNavBarComponent navbarOpen={navbarOpen} />
        <div className="news-container">
          <Switch>

            <Route exact path="/">

              <span className="page-title">Headlines</span>

              <GeneralPage />


            </Route>
            <Route path="/search">

              <span className="page-title">Search Results</span>

              <SearchPage query={searchQuery} />
            </Route>
            <Route path="/myfeed">

              <span className="page-title">Feed</span>

              <UserFeed />
            </Route>
            <Route path="/sports">

              <span className="page-title">Sports</span>

              <SportsPage />

            </Route>
            <Route path="/business">

              <span className="page-title">Business</span>

              <BusinessPage />

            </Route>
            <Route path="/culture">

              <span className="page-title">Culture</span>

              <CulturePage />

            </Route>
            <Route path="/technology">

              <span className="page-title">Technology</span>

              <TechnologyPage />

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
