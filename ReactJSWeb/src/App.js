import React from 'react';
import './App.css';
import Detail from './components/Detail'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/detail" component={Detail}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
