export let statef = {
  produc: [
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
      id: 6,
      food: "Mutoon Biryani",
      price: 200,
      imge: require("../img/mutton.jpeg"),
    },
  ],
  cart: [],
  favourite: [],
};

export let ReducerVariable = (state = statef, stateFun) => {
  console.log(stateFun);

  switch (stateFun.type) {
    case "card": {
      return {
        produc: state.produc,
        cart: [...state.cart, stateFun.data],
        favourite: state.produc,
      };
    }
    case "favourite": {
      return {
        produc: state.produc,
        cart: state.cart,
        favourite: [...state.cart, stateFun.data],
      };
    }
  }
  // return { produc: state.produc, cart: [...state.cart, stateFun] };
};
