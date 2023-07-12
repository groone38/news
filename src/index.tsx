import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/state";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>
);
