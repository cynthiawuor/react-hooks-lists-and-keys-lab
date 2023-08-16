import React from "react";

function Home({ color, username, city }) {
  return (
    <div id="home">
      <h1 style={{ color: color }}>
        {Routhrock} is a Tour Guide from {Kenya}
      </h1>
    </div>
  );
}

export default Home;
