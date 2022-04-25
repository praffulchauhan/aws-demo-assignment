import { useState } from "react";
import React from "react";
import axios from "axios";
import "./Update.css";
function Update() {
  const [email, setEmail] = useState("");
  const [boolValue, setboolvalue] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "http://localhost:3000/user/update",

        {
          email_id: `${email}`,
          boolValue: `${boolValue}`,
        }
      )
      .then(function (response) {
        alert("Update Success!");
      })
      .catch(function (error) {
        alert("Update Failed!");
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          <b>Email:</b>
          <br />
          <input
            className="x"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <b>Is_deleted:</b>
          <br />
          <input
            className="x"
            type="text"
            value={boolValue}
            onChange={(e) => setboolvalue(e.target.value)}
          />
        </label>
        <br />

        <input className="y" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Update;
