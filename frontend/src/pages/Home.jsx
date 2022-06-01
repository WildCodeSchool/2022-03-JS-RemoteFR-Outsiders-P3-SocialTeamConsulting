import React from "react";

import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="app-main">
      <h1>Social Team Consulting</h1>
      <div>
        <NavLink to="/page1">Page 1</NavLink> -
        <NavLink to="/page1">Page 2</NavLink>
      </div>
      <button className="button-blue" type="button">
        Click me
      </button>
    </main>
  );
}
