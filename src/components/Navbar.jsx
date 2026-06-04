import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav>
      <Logo />

      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/projects">Projects</Link> |{" "}
      <Link to="/services">Services</Link> |{" "}
      <Link to="/references">References</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;