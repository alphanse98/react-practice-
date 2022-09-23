import React from "react";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  let food = [
    { id: 1, food: "dosai", price: 50, imge: require("../img/dosai.jpeg") },
    { id: 2, food: "proda", price: 20, imge: require("../img/proda.jpeg") },
    { id: 3, food: "idly", price: 10, imge: require("../img/idly.jpeg") },
    { id: 4, food: "puri", price: 15, imge: require("../img/puri.jpeg") },
    {
      id: 5,
      food: "Biryani",
      price: 150,
      imge: require("../img/Biryani.jpeg"),
    },
    {
      id: 5,
      food: "Mutoon Biryani",
      price: 200,
      imge: require("../img/mutton.jpeg"),
    },
  ];

  localStorage.setItem("keya", JSON.stringify(food));
  
  
  var varible = useNavigate();

  let userHandle = (data) => {
    data.preventDefault();
    varible("/home");
  };

  return (
    <div>
      <form onSubmit={userHandle}>
        <input type="text" placeholder="user name"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Loginpage;
