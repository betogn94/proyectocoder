import React from "react";
import ReactDOM from "react-dom";
import getFirestoreApp from "./firebase/config";
import App from "./App";

getFirestoreApp()

ReactDOM.render(<App />, document.getElementById("root"));
