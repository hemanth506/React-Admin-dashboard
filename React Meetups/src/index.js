import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { FavouriteContentProvider } from "./store/favourites-context";

ReactDOM.render(
  <FavouriteContentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteContentProvider>,
  document.getElementById("root")
);
