import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Project from './components/pages/Project';
import NotFoundPage from './components/NotFoundPage';
import Contact from './components/pages/Contact';
import About from './components/pages/About';


function App() {
  return (
    <div className="app p-0">
      <Router>
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Navbar />
              <Home />

            </div>
          } />

          <Route path="/project" exact component={props =>
            <div>
              <Navbar />
              <Project />

            </div>
          } />

          <Route path="/contact" exact component={props =>
            <div>
              <Navbar />
              <Contact />

            </div>
          } />
          <Route path="/about" exact component={props =>
            <div>
              <Navbar />
              <About />

            </div>
          } />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
