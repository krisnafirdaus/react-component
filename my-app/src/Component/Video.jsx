import React from "react";

export default function Video() {
  return (
    <carousel>
      <div class="card">
        <video controls>
          <source src="" type="" />
        </video>
        <div class="container">
          <h3>
            <b>HTML Foundation</b>
          </h3>
          <h5>
            Learn HTML Fundamental <br /> with Mentor Krisna
          </h5>
        </div>
      </div>
      <div class="card">
        <video controls>
          <source src="" type="" />
        </video>
        <div class="container">
          <h3>
            <b>CSS Foundation</b>
          </h3>
          <h5>
            Learn CSS Fundamental <br /> with Mentor Firdaus
          </h5>
        </div>
      </div>
    </carousel>
  );
}
