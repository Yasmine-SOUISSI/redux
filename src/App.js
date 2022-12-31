import React, { useState } from "react";
import { changeName } from "./Redux/actions/userActions";
import { useDispatch } from "react-redux";
import NameValue from "./Components/nameValue";

function App() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  console.log(name);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <label>
        Name:
        <input type='text' name='name' onChange={handleChange} />
      </label>
      <input
        type='submit'
        value='Submit'
        onClick={() => dispatch(changeName(name))}
      />

      <NameValue />
    </div>
  );
}

export default App;
