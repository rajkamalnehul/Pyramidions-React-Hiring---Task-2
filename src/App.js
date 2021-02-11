/** @format */

import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Outlets from "./Outlets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ error, restaurants }, dispatch] = useStateValue();
  console.log(error);

  useEffect(() => {
    async function fetchData() {
      await axios
        .post(
          "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant ",
          {
            latitude: 13.0358481,
            longitude: 80.244455,
          }
        )
        .then((response) => {
          //console.log(response.data.error);

          dispatch({
            type: "SET_ERROR",
            error: response.data.error,
          });

          dispatch({
            type: "SET_RESTAURANTS",
            restaurants: response.data.listRestaurants,
          });
        });
    }

    // .catch((error) => {
    //   console.log(error);
    // });
    fetchData();
  }, []);

  return (
    <Router>
      {error === true || typeof restaurants === "undefined" ? (
        <h2>SOMETHING WENT WRONG</h2>
      ) : (
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route path="/outlets/:Id">
              <Header />
              <Outlets />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  );
}

export default App;
