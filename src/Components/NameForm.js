import React from "react";

export const NameForm = (props) => (
  <form className="name-field" onSubmit={props.handleSubmit}>
    <label>
      Name:
      <input
        name="name"
        type="text"
        placeholder="Enter Your Name"
        className="name-input"
        value={props.userName}
        onChange={props.handleChange}
      />
    </label>
    <input type="submit" value="Submit" />
  </form>
);
