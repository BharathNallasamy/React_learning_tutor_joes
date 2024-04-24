// import React from 'react'
import PropTypes from "prop-types";

export const OneOfSample = (props) => {
  const { color } = props;
  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <p>This bgc is a {color} color.</p>
    </div>
  );
};

OneOfSample.propTypes = {
  color: PropTypes.oneOf(["red", "green", "yellow"]).isRequired,
};
