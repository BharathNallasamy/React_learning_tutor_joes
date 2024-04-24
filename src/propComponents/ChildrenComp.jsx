import React from 'react'
import PropTypes from "prop-types";

export const ChildrenComp = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildrenComp.propTypes = {
    children : PropTypes.array,
}