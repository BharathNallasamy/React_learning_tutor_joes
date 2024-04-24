import { useState } from "react";

export const InputField = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleFirstname = (e) => {
    e.preventDefault();
    setName({ ...name, firstName: e.target.value });
  };

  const handleLastname = (e) => {
    e.preventDefault();
    setName({ ...name, lastName: e.target.value });
  };
  return (
    <div>
      <div>Form</div>
      <div>
        {name.firstName} - {name.lastName}
        <form>
          <div>
            <label htmlFor="firstName">FirstName</label>
            <input
              id="firstName"
              type="text"
              value={name.firstName}
              onChange={handleFirstname}
              placeholder="Enter First Name"
            />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">lastName</label>
            <input
              id="lastName"
              type="text"
              value={name.lastName}
              onChange={handleLastname}
              placeholder="Enter Last Name"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
