import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import contaxtVariable from "./context";

function Home() {
  const { appState, setappState } = useContext(contaxtVariable);
  console.log("reducer state", appState);

  let [data, setdata] = useState([]),
    [emptyArr, setemptyArr] = useState([]);

  localStorage.setItem("card", JSON.stringify(emptyArr));

  useEffect(() => {
    let dataFromLs = JSON.parse(localStorage.getItem("keya"));
    setdata(dataFromLs);
  }, []);

  let usenav = useNavigate();

  let cardFun = () => {
    usenav("/card");
  };

  let addFun = (props) => {
    if (!emptyArr.some((some) => some.id == props.id)) {
      setemptyArr([...emptyArr, props]);
      //reduce
      setappState({ type: "card", data: props });
    }
  };

  let favFun = (props) => {
    //reduce
    setappState({ type: "favourite", data: props });
    console.log("fav wrking");
  };

  return (
    <div>
      <button onClick={cardFun}>{data.food}Viwe Card</button>
      {data.map((data, index) => (
        <div key={index}>
          <img src={data.imge} style={{ width: "300px" }}></img>
          <p>{data.food}</p>
          <span>Rs {data.price}</span>
          <button onClick={() => addFun(data)}>Add card</button>
          <button onClick={() => favFun(data)}>favourite</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
