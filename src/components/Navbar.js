import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 id="ttl">Diaries & Quotes</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/form">Add Content</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
