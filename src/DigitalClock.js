import React from "react";
import { connect } from "react-redux";
import { increaseMinutes, increaseHours } from "./actions";

function DigitalClock(props) {
  return (
    <div>
      <h2>The clock is</h2>
      <p>
        {props.hours}:{props.minutes}
      </p>
      <button onClick={props.increaseHours}>Hour+</button>
      <button onClick={props.increaseMinutes}>Min+</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    minutes: state.minutes,
    hours: state.hours,
  };
};

const mapDispatchToProps = {
  increaseHours,
  increaseMinutes,
};

export default connect(mapStateToProps, mapDispatchToProps)(DigitalClock);
