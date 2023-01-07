import axios from "axios";
import React, { useEffect, useState } from "react";
const Axios = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
      setResponse(response);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "morpheus",
          job: "leader",
        }
      );
      setResponse(response);
    } catch (error) {
      setError(error);
    }
  };

  // DELETE request using axios and promise
  const deleteUser = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <button onClick={() => addUser()}>Add User</button>
      <>
        {data.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.website}</p>
              <button onClick={() => deleteUser(user.id)}>Delete User</button>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Axios;
