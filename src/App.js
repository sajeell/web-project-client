import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import CourseDetails from "./components/courseDetails/CourseDetails";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Payment from "./components/payment/Payment";

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
          <Route path="/course-details">
            <Header />
            <CourseDetails />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
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
