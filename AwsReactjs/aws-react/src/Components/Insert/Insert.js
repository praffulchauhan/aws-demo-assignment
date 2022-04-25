import { useState } from "react";
import React from "react";
import axios from "axios";
import "./Insert.css";
function Insert() {
  const [email, setEmail] = useState("");
  const [createdby, setcreated_by] = useState("");
  const [updatedby, setupdated_by] = useState("");
  const [isdeleted, setisdeleted] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ email });

    axios
      .post("http://localhost:3000/user/write", {
        email_id: `${email}`,
        created_by: `${createdby}`,
        // created_on: new Date().toString(),
        updated_by: `${updatedby}`,
        // updated_on: new Date().toString(),
        is_deleted: `${isdeleted}`,
      })
      .then(function (response) {
        alert("Data Inserted");
      })
      .catch(function (error) {
        alert("Failed");
      });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          <b> Email:</b>
          <br />
          <input
            className="x"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <b>Created_by:</b>
          <br />
          <input
            className="x"
            type="text"
            value={createdby}
            onChange={(e) => setcreated_by(e.target.value)}
          />
          <br />
          <b>Updated_by:</b>
          <br />
          <input
            className="x"
            type="text"
            value={updatedby}
            onChange={(e) => setupdated_by(e.target.value)}
          />
          <br />
          <b>Is_deleted:</b>
          <br />
          <input
            className="x"
            type="text"
            value={isdeleted}
            onChange={(e) => setisdeleted(e.target.value)}
          />
          <br />
          <input className="y" type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}

export default Insert;
