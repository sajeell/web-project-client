import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";

import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Header />
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
