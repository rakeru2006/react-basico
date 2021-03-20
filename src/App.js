import React, { Component } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Home from './components/Home';
import Header from './components/Header';
//import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Management from './components/Management';
import Rh from './components/Rh';
import Help from './components/Help';
import Agenda from './components/Agenda';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Header/>

        <main className="flex-shrink-0">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/management" component={Management} />
              <Route path="/help" component={Help} />
              <Route path="/rh" component={Rh} />
              <Route path="/agenda" component={Agenda} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>

        
      </Router>
    )
  }
}

export default App;