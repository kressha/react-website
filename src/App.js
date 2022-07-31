import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Residential from './components/pages/Residential';
import Commercial from './components/pages/Commercial';
import Subscribe from './components/pages/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/residential' component={Residential} />
        <Route path='/commercial' component={Commercial} />
        <Route path='/subscribe' component={Subscribe} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
