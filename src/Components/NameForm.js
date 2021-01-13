import React from "react";
import "./NameForm.css";

export const NameForm = (props) => (
  <form className="name-field" onSubmit={props.handleSubmit}>
    <label>
      <input
        name="name"
        type="text"
        placeholder="Enter Your Name"
        className="name-input"
        value={props.userName}
        onChange={props.handleChange}
      />
    </label>
    <input type="submit" value="Start Game" />
  </form>
);
