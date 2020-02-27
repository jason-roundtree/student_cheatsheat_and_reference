import React from 'react'
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './About'
import TableOfContents from './TableOfContents'
import Main from './Main'
import data from './data'

function App() {
  return (
    <HashRouter basename="/">
      <h1>
        <Link to="/">Web Dev Cheatsheet & Reference</Link>
      </h1>

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <h2>
            <Link to="/about">About</Link>
          </h2>
          <TableOfContents 
            data={data} 
          />
          <Main />
        </Route>
      </Switch>

    </HashRouter>
  );
}

export default App;
