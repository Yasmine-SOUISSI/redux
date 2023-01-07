import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Redux/actions/productActions";

function App() {
  // get products from redux store
  const products = useSelector((state) => state.productReducer.products);
  const [product, setProduct] = useState({});
  const handleChanges = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  console.log(product);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
      <input type='text' name='name' onChange={handleChanges} />
      <input type='number' name='price' onChange={handleChanges} />
      <textarea name='description' onChange={handleChanges} />
      <button
        onClick={() => {
          dispatch(addProduct(product));
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default App;
