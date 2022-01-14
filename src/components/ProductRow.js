import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductRow(props) {
  return (
    <tr>
      <td scope="row">{props.product.id}</td>

      <td>{props.product.name}</td>
      <td>${props.product.price}</td>
      <td>{props.product.countInStock}</td>
      <td>{props.product.category}</td>
      <td>{props.product.brand}</td>
      <td>
        <Link
          className="btn btn-dark mr-2"
          to={`/product/${props.product.id}/edit`}
        >
          <i className="fas fa-edit"></i>
        </Link>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => props.deleteHandler(props.product)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  )
}
