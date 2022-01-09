import React from "react";

export default function LoadingBox() {
  return (
    <div className="alert alert-dark" role="alert">
      <i className="fas fa-cog fa-spin" /> Loading...
    </div>
  );
}
