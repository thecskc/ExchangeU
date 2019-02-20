import React from "react";

import "./CoachItem.css";
import profileImage from "../assets/user.png";

export default function CoachItem(props) {
  return (
    <div className="card">
      <img src={profileImage} style={{ margin: 16 }} />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}
