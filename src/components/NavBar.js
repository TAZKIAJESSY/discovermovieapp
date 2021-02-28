import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        margin: 20,
        fontSize: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <NavLink
        activeStyle={{ fontweight: "bold", color: "greenyellow" }}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ fontweight: "bold", color: "teal" }}
        exact
        to="/about"
      >
        About Us
      </NavLink>
      <NavLink
        activeStyle={{ fontweight: "bold", color: "tomato" }}
        exact
        to="/discover"
      >
        Discover Movie Page
      </NavLink>
    </div>
  );
}

export default NavBar;
