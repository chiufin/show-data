import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GridPage from '../components/GridPage'
import ChartPage from '../components/ChartPage'
import './App.css';

function Home() {
  return <h2>Home</h2>;
}

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/grid">Grid</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/grid">
        <GridPage />
      </Route>
      <Route path="/chart">
        <ChartPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <div>
    </div>
  </Router>

)

export default App