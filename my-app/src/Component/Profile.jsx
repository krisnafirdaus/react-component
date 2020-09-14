import React from "react";
import Logo from "Assets/0.jpg";

export default function Profile() {
  return (
    <main>
      <div class="card">
        <img src={Logo} alt="Avatar" />
        <div class="container">
          <h1>
            <b>Krisna Firdaus</b>
          </h1>
          <h5>Fullstack Web Development</h5>
          <p>Coding is My Passion</p>
        </div>
      </div>
    </main>
  );
}
