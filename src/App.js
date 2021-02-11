import logo from './logo.svg';
import './App.css';

// Importing components
import NavBarComponent from './components/Navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent/>
        
      </header>
      <body>
      <img src={logo} className="App-logo" alt="logo" />
      </body>
      <footer>

      </footer>
    </div>
  );
}



export default App;
