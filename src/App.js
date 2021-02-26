

import React from 'react'
import './App.css';
import Ripples from 'react-ripples' // use for buttons only
import { Route, Switch } from "react-router-dom"
import {ToastContainer} from 'react-toastify';



// Importing components
import NavBarComponent from './components/Navbar'
import SideNavBarComponent from './components/SideNavBar'
import NewsCardComponent from './components/NewsCard';

//import pages
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"

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

  const handleNavbarOpen = () => {
    setNavbarOpen(prev => !prev)
    console.log(navbarOpen)
  }


  return (



    <div className="App">
      <ToastContainer limit={3}/>

      <header className="App-header">
        <NavBarComponent navbarOpen={navbarOpen} setNavbarOpen={handleNavbarOpen} />

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
        
        <Route path="/register">
          <Register/>
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
