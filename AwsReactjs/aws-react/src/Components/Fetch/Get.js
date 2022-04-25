import { useState } from "react";
import React from "react";
import axios from "axios";
import "./Get.css";
function Get() {
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios
      .get(
        "http://localhost:3000/user/read",

        {
          data: {
            email: `${email}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.data != null) alert("Yes the record exists!");
        else alert("No it does not exists!");
      })
      .catch(function (error) {
        console.log(error);
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
        </label>
        <br />
        <input className="y" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Get;
