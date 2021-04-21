import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import {fakeInterests, fakeSkills} from "./dummy-data";
import Home from './components/Home';
import InterestsPage from './components/InterestsPage';
import InterestPage from './components/InterestPage';
import SkillsPage from './components/SkillsPage';
import SkillPage from './components/SkillPage';
import Header from './components/Header';
import LoginPage from './components/LoginPage';


// Using react hooks for all components
function App() {
  console.log('test return', fakeInterests);
  console.log('test return', fakeSkills);

  // Authentication check here

  // Login will be moved into its own return after authentication is added
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route exact path="/Interests" component={InterestsPage} />
        <Route path="/Interests/:id" component={InterestPage} />
        <Route exact path="/Skills" component={SkillsPage} />
        <Route path="/Skills/:id" component={SkillPage} />
        <Route path="/Login" component={LoginPage} />
        <Redirect to="/Home" />
      </Switch>
    </div>
  );
}

export default App;
