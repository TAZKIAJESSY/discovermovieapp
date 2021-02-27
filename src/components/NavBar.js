import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div style={{}}>
      <NavLink activeStyle={{ fontweight: "bold" }} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={{ fontweight: "bold" }} exact to="/about">
        About Us
      </NavLink>
      <NavLink activeStyle={{ fontweight: "bold" }} exact to="/discover">
        Discover Movie Page
      </NavLink>
    </div>
  );
}

export default NavBar;
