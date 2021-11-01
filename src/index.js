import React from "react";
import ReacDOM from "react-dom";
import App from "./components/App";

if (module.hot) {
  module.hot.accept();
}

ReacDOM.render(<App />, document.getElementById("root"));
