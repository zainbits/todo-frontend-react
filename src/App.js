import "./App.css";
import { LoginPage } from "./Pages/Login";
import { AllUsers } from "./Pages/AllUsers";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import React from "react";

export const SimpleContext = React.createContext("I am in App component");
console.log(SimpleContext);

function App() {
  let contextValue = "I am in App component";

  return (
    <>
      <div className="LeftPane">
        <div className="login-lp">
          <p>TODO - Web App{`\n`}Made in react</p>
        </div>
      </div>
      <div className="block--right">
        <SimpleContext.Provider value={contextValue}>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/getallusers">
              <AllUsers />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </SimpleContext.Provider>
      </div>
    </>
  );
}

export default App;