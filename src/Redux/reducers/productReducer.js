const intialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
    },
  ],
  product: {},
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
