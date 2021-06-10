import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Certificate from "./components/certificate/Certificate"
import CourseDetails from "./components/courseDetails/CourseDetails"
import Dashboard from "./components/dashboard/Dashboard"
import Header from "./components/header/Header"
import Payment from "./components/payment/Payment"
import NormalQuiz from "./components/questionnaire/normalQuiz/NormalQuiz"
import Result from "./components/result/Result"

import SignIn from "./components/signIn/SignIn"
import SignUp from "./components/signUp/SignUp"

import { firebase } from '@firebase/app'
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth"

// These imports load individual services into the firebase namespace.
import 'firebase/auth';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBvSlnCvuCh3YeP_ZbBGVvXy38uBsyyyB4",
    authDomain: "web-project-d0584.firebaseapp.com",
    projectId: "web-project-d0584",
    storageBucket: "web-project-d0584.appspot.com",
    messagingSenderId: "1094094419595",
    appId: "1:1094094419595:web:9b3c53ccece7acaa5f068e",
    measurementId: "G-K89DLNRH69"
  }

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/signin">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Header />
                        <Dashboard />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route path="/signup">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Header />
                        <Dashboard />
                      </div>
                    )
                  } else {
                    return <SignUp />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route path="/course-details">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Header />
                        <CourseDetails />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route path="/payment">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Header />
                        <Payment />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route path="/normal-quiz">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <NormalQuiz />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route path="/result">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Header />
                        <Result />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route path="/certificate">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Certificate />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
            <Route exact path="/">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <Header />
                        <Dashboard />
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
          </Switch>
        </Router>
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
