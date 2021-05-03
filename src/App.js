import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Certificate from "./components/certificate/Certificate";
import CourseDetails from "./components/courseDetails/CourseDetails";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Payment from "./components/payment/Payment";
import NormalQuiz from "./components/questionnaire/normalQuiz/NormalQuiz";
import Result from "./components/result/Result";

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
          <Route path="/normal-quiz">
            <NormalQuiz />
          </Route>
          <Route path="/result">
            <Header />
            <Result />
          </Route>
          <Route path="/certificate">
            <Certificate />
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
