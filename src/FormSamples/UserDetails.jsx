import React, { useState } from "react";

const UserDetails = () => {
  const [user, setUser] = useState({ fName: "Ram", lName: "Kumar", age: 22 });
  //   function changeName(e) {
  //     setUser((oldState) => {
  //       return { ...oldState, name: e.target.value };
  //     });
  //   }
  function changeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h2>User Details</h2>
      <h2>
        {user.fName},{user.lName},{user.age}
      </h2>

      <form>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={changeHandler}
          value={user.fName}
          name="fName"
        />
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={changeHandler}
          value={user.lName}
          name="lName"
        />
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={changeHandler}
          value={user.age}
          name="age"
        />
      </form>
    </>
  );
};

export default UserDetails;
