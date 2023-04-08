import { v4 as uuid } from "uuid";
import "./App.css";
import Adduser from "./components/Users/Adduser";
import Userlist from "./components/Users/UsersList";
import { Children, useState } from "react";

function App() {
  const [Userlistarr, setUserlist] = useState([]);
  const adduserhandler = (name, age) => {
    setUserlist((pr) => {
      return [...pr, { name, age, id: uuid() }];
    });
  };

  const incrementAge = (id) => {
    setUserlist((pr) => {
      return pr.map((user) =>
        id === user.id ? { ...user, age: Number(user.age) + 1 } : { ...user }
      );
    });
  };

  return (
    <>
      <Adduser onAddUser={adduserhandler} />
      <Userlist users={Userlistarr} onIncrementFire={incrementAge} />
    </>
  );
}

export default App;
