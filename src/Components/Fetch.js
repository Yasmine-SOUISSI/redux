import { useEffect, useState } from "react";

const Fetch = () => {
  // GET request using fetch  URL : https://jsonplaceholder.typicode.com/users METHOD : GET
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);

  const addUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      console.log(response);
    });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button onClick={() => addUser()}>Add User</button>
      <>
        {users.map((user) => {
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

export default Fetch;
