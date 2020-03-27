import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import Navbar from "./components/Navbar";

import "bootswatch/dist/sketchy/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <div className="container p-4">
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageForm} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
