import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import store from "../src/REDUX/store";
import MovieList from "./Components/MovieList";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Nav} />
          <Switch>
            {/* <Route Path='/' render= {props =>
      <div>
      <Nav />
      <Login />
      </div>}
      /> */}
            <Route exact path="/" component={Login} />
            <Route exact path="/movieList" component={MovieList} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
