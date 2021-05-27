import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Main from "./components/Main/Main";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <main className="layout">
            <LeftSidebar />
            <Main />
            <RightSidebar />
          </main>
        </Route>
        <Route path="/movie/:id" exact component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;
