import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const gelenData = [
    { width: "10" },
    { width: "15" },
    { width: "30" },
    { width: "30,5" },
    { width: "40" },
    { width: "40,6" },
    { width: "7,5" },
  ];

  let index = 1;
  gelenData.forEach(element => {
    console.log(index, element.width);
    index++;
  });

  // gelenData.map((newData) => {
  //   // var newOption = document.createElement("option");
  //   // newOption.value = newData.width;
  //   // newOption.text = newData.width;
  //   // widthSelect.append(newOption);
  //   console.log(newData.width);
  // });
  
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
