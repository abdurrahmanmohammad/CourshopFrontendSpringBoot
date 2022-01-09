import React from "react";

export default function Categories() {
  return (
    <div className="col-md-3 border-right border-control">
      <table className="table table-hover border-bottom">
        <thead className="thead-dark">
          <tr>
            <th className="text-center">Categories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Textbooks</td>
          </tr>
          <tr>
            <td>Office Supplies</td>
          </tr>
          <tr>
            <td>Electronics</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
