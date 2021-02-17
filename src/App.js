import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Project from './components/pages/Project';


function App() {
  return (
    <div className="app p-0">
      <Router>
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Navbar />

            </div>
          } />

          <Route path="/project" exact component={props =>
            <div>
              <Navbar />
              <Project />

            </div>
          } />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
