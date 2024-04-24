import PropTypes from "prop-types";

export const MultiTypeComp = (props) => {
  return (
    <div>
      <p>The Value is: {props.value}</p>
    </div>
  );
};

MultiTypeComp.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};
