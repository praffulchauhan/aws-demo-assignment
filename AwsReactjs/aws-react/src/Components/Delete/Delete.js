import { useState } from "react";
import React from "react";
import axios from "axios";
function Delete() {
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log(`${name}`);
    axios
      .delete(
        "http://localhost:3000/user/delete",

        {
          data: {
            email_id: `${email}`,
          },
        }
      )
      .then(function (response) {
        alert("Record Deleted!");
      })
      .catch(function (error) {
        alert("Failed");
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

export default Delete;
