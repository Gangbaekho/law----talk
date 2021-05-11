import React from "react";
import ReactDOM from "react-dom";

import RootRouter from "./router/RootRouter";

// REDUX
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider as URQLProvider, createClient } from "urql";

// REDUCERS
import testReducer from "./store/reducer/test";
import consultingQuestoinReducer from "./store/reducer/consulting-question";

import reportWebVitals from "./reportWebVitals";

const rootReducer = combineReducers({
  test: testReducer,
  consultingQuestion: consultingQuestoinReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <URQLProvider value={client}>
        <RootRouter />
      </URQLProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
