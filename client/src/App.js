import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="app__container">
          <Routes>
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/home" component={Home} />
            <Route path="/recipe" component={CreateFood} />
            <Route path="/recipes/:id" component={Detail} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
