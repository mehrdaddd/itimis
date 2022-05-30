import React from "react";

const Button = props => <button type={props.type} onClick={() => props.onClick()}> {props.children} </button>

export default Button ;