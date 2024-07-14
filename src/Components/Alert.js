import React from "react";
export default function Alert(props) {
  return (
    props.alert && (
      <div className={`alert ${props.alert.type}`}>
        <p className="altxt">
          <b>{props.alert.type}: </b>
          {props.alert.message}
        </p>
        <button className="albtn" onClick={props.dissmiss}>
          <b>x</b>
        </button>
      </div>
    )
  );
}
