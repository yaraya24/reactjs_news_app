

import React from 'react'
import './App.css';
import Ripples from 'react-ripples' // use for buttons only
import { Route, Switch } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify';
import axiosInstance from './axios'
import { useHistory, useLocation} from 'react-router-dom'


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


const news_stories = [
  {
    id: 1,
    heading: 'China bans BBC World News in retaliation for UK licence blow',
    img_url: 'https://i.guim.co.uk/img/media/a11802cf7dc904b8adda3583bf016e5a0e8092ee/0_355_5390_3236/master/5390.jpg?width=620&quality=85&auto=format&fit=max&s=a0a576e88336ec51896730a6e45f8c6e',
    snippet: "China has been critical of BBC reports on Xinjiang, while Ofcom recently revoked CGTN licence",
    author: "Patrick Wintour",
    publish_date: "Thu 11 Feb 2021",

  },
  {
    id: 2,
    heading: 'Donald Trump is so dead at impeachment',
    img_url: 'https://i.guim.co.uk/img/media/a11802cf7dc904b8adda3583bf016e5a0e8092ee/0_355_5390_3236/master/5390.jpg?width=620&quality=85&auto=format&fit=max&s=a0a576e88336ec51896730a6e45f8c6e',
    snippet: "China has been critical of BBC reports on Xinjiang, while Ofcom recently revoked CGTN licence",
    author: "Patrick Wintour",
    publish_date: "Thu 11 Feb 2021",
  },
  {
    id: 3,
    heading: 'Holy Moly we just found a cure for peri peri',
    img_url: 'https://i.guim.co.uk/img/media/a11802cf7dc904b8adda3583bf016e5a0e8092ee/0_355_5390_3236/master/5390.jpg?width=620&quality=85&auto=format&fit=max&s=a0a576e88336ec51896730a6e45f8c6e',
    snippet: "China has been critical of BBC reports on Xinjiang, while Ofcom recently revoked CGTN licence",
    author: "Patrick Wintour",
    publish_date: "Thu 11 Feb 2021",
  }
]

function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(true)
  const location = useLocation();
  
  
  React.useEffect(() => {
    if (location.pathname === '/login') {
      setShowSearch(true)
      console.log('LOL')
    }
  },[location])
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
      <ToastContainer limit={3}/>

      <header className="App-header">
        <NavBarComponent showSearch={showSearch} handleLogout={handleLogout} loginStatus={loginStatus} navbarOpen={navbarOpen} setNavbarOpen={handleNavbarOpen} />

      </header>
      <div className="body-div">
        <SideNavBarComponent navbarOpen={navbarOpen} />

        <Switch>
        <Route exact path="/">
          <div className="news-container">
            <span className="page-title">Headlines</span>

            {news_stories.map(item => {

              return (
                <NewsCardComponent id={item.id} story={item} />
              )
            })}
          </div>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/login">
          <LoginForm handleLoginStatus={handleLoginStatus}/>
        </Route>
        
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/myaccount">
          <MyAccount/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
        </Switch>







      </div>
      <footer>

      </footer>
    </div>

  );
}



export default App;
