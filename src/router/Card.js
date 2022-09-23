import React, { useEffect, useState } from "react";

const Card = () => {
  let [emptyArr, setemptyArr] = useState([]);

  useEffect(() => {
    setemptyArr(JSON.parse(localStorage.getItem("card")));
  }, []);

  let removeFuc = (param) => {
    emptyArr.filter((paramFilter) => paramFilter.id !== param.id);
  };

  return (
    <div>
      <h1>card</h1>
      {emptyArr.map((data, index) => (
        <div key={index}>
          <img src={data.imge} style={{ width: "300px" }}></img>
          <p>{data.food}</p>
          <span>Rs {data.price}</span>
          <button onClick={() => removeFuc(data)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
