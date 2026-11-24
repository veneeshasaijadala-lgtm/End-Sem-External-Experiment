
import React from "react";

// Import images
import laptop from "../images/laptop.webp";
import mobile from "../images/mobile.jpg";
import accessories from "../images/accessories.jpg";
import computer from "../images/computer.jpg";

// Child Component
function ProductCard(props) {
  return (
    <div>
      <img
        src={props.image}
        alt={props.name}
        width="150"
        height="120"
      />

      <h2>{props.name}</h2>

      <p>Price: ₹{props.price}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <h1>Product Store</h1>

      <ProductCard
        name="Laptop"
        price="50000"
        image={laptop}
      />

      <ProductCard
        name="Mobile"
        price="20000"
        image={mobile}
      />

      <ProductCard
        name="Accessories"
        price="2000"
        image={accessories}
      />

      <ProductCard
        name="Computer"
        price="60000"
        image={computer}
      />

    </div>
  );
}

export default App;
