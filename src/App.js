import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/project' component={Projects}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  )
}

export default App;
