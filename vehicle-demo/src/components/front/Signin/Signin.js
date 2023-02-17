import React, { useState } from "react";
import "./signin.css";

function SignIn() {
  const [name, setName] = useState({
    userName: "",
    password: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    const { value, name } = event.target;

    setName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    console.log(name);
  };
  return (
    <div className="signin">
      <form onSubmit={onSubmits}>
        <h1> SIGN IN</h1>
        <br />

        <input
          type="text"
          name="userName"
          placeholder="Enter Username"
          onChange={inputEvent}
          value={name.userName}
        />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          onChange={inputEvent}
          value={name.password}
        />
        <br />
        <br />
        <button className="btn" type="submit">
          Click
        </button>
      </form>
    </div>
  );
}

export default SignIn;
