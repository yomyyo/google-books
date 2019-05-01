//import react
import React from "react";
//import react-dom
import ReactDOM from "react-dom";
//import App file
import App from "./App";
//import registerserviceworker
import registerServiceWorker from "./registerServiceWorker";

//render all of our parts in root of index.html
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
