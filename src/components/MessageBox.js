import React from "react";

export default function MessageBox(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {props.message}
    </div>
  );
}
