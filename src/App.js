import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </div>
  )
}

export default App;
