import React from "react";
import PropTypes from "prop-types";

export const Students = (props) => {
  const { name, age, martialStatus } = props;
  return (
    <div>
      
        <div>{name}</div>
        <div>{age}</div>
        <div>{martialStatus ? "Yes" : "No"}</div>
    </div>
  );
};

Students.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  martialStatus: PropTypes.bool,
};

Students.defaultProps = {
    name : "No Name",
    age:0,
    martialStatus:false
}