import logo from './logo.svg';
import React from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

// Importing components
import NavBarComponent from './components/Navbar'
import SideNavBarComponent from './components/SideNavBar'
import reactDom from 'react-dom';
import { FaBlackberry } from 'react-icons/fa';

function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  const handleNavbarOpen = () => {
    setNavbarOpen(prev => !prev)
    console.log(navbarOpen)
  }


  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent navbarOpen={navbarOpen} setNavbarOpen={handleNavbarOpen}/>
        
      </header>
      <div className="body-div">
        <SideNavBarComponent navbarOpen={navbarOpen}/>
        <div className="news-container">
          <h1>headlines</h1>

        </div>
      
      
      </div>
      <footer>

      </footer>
    </div>
  );
}



export default App;
