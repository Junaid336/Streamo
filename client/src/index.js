import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";

import history from "./helper/history";
import reducers from "./reducers";
import App from "./components/App";
import CustomRouter from "./components/CustomRouter";



const store = createStore(
   reducers,
   applyMiddleware(reduxThunk)
  );

createRoot(document.getElementById('root'))
.render(
  <Provider store={store}>
    <CustomRouter history={history} >
      <App />
    </CustomRouter>
  </Provider>
);