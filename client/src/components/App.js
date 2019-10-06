import React from 'react'
import Footer from '../features/filters/Footer'
import AddTodo from '../features/todos/AddTodo'
import VisibleTodoList from '../features/todos/VisibleTodoList'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

function Grid() {
  return <h2>Grid</h2>;
}

function Chart() {
  return <h2>Chart</h2>;
}

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
        <Grid />
      </Route>
      <Route path="/chart">
        <Chart />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Router>

)

export default App