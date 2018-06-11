import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./setup/setup";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// store.subscribe(() => {
//   console.log("sunscribe", store.getState());
// });

// store.dispatch({ type: "ADD_TRACK", payload: "new value" });
// store.dispatch({ type: "ADD_TRACK", payload: "new value2" });
