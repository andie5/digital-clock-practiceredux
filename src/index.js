import React from "react";
import ReactDOM from "react-dom";
import DigitalClock from "./DigitalClock";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ADD_HOUR, ADD_MINUTE } from "./action-types";

const initialState = {
  hours: 0,
  minutes: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MINUTE:
      return {
        ...state,
        minutes: state.minutes === 59 ? 0 : state.minutes + 1,
      };
    case ADD_HOUR:
      return { ...state, hours: state.hours === 24 ? 0 : state.hours + 1 };
    default:
      return state;
  }
};
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <DigitalClock />
  </Provider>,
  document.getElementById("root")
);
