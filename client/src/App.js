import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () =>{
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <Navbar switchTheme={switchTheme}/>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          {/* <Route exact path="/home" component={Home} />
            <Route path="/recipe" component={CreateFood} />
            <Route path="/recipes/:id" component={Detail} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
