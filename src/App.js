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
import Footer from './Footer'
import data from './data'

function App() {
  return (
    <HashRouter basename="/">
      <header>
        <h1>
          Web Dev Cheatsheet & Reference
        </h1>
        <Link to="/about">About</Link>
      </header>
      

      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <TableOfContents 
            data={data} 
          />
          <Main />
        </Route>
      </Switch>

      <Footer />
    </HashRouter>
  );
}

export default App;
