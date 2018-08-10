import React from "react";

import "./Button.css";

const Button = props => (
  <div
    className={`Button ${
      props.active
        ? props.fill
          ? `active fill`
          : `active no-fill`
        : `disabled`
    }`}
  >
    {props.label}
  </div>
);

export default Button;
