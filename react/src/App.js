import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Todo from "./component/Todos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(
    AuthContext
  );
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/todos" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
