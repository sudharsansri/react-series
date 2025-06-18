import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img"
          src="https://cdn.dummyjson.com/recipe-images/30.webp"
          alt="React Logo"
        />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link> </li>
          <li><Link to="/about">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
};

