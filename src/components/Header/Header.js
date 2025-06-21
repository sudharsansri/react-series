import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {addItem} from "../../utlis/cartSlice.js";
import { use } from "react";

export const Header = () => {
  const user= useSelector((store)=> store.cart.items)
  const dispatch=useDispatch()
  console.log("user", user);
  const handleClick = () => {
    dispatch(addItem({
      name: "Pizza",
      price: 100,
      description: "Delicious cheese pizza",
      image: "https://cdn.dummyjson.com/image/i/products/1/thumbnail.jpg"
    }));
  }
  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img"
          src="https://cdn.dummyjson.com/recipe-images/30.webp"
          alt="React Logo"
        />
        <button onClick={handleClick}>food</button>
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

