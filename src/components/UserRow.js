import React from 'react'
import { Link } from 'react-router-dom'

export default function UserRow(props) {
  return (
    <tr>
      <td scope="row">{props.user.id}</td>
      <td>{props.user.active ? "True" : "False"}</td>
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{props.user.role === 'ADMIN' ? 'Yes' : 'No'}</td>
      <td>
        <Link className="btn btn-dark mr-2" to={`/user/${props.user.id}/edit`}>
          <i className="fas fa-edit"></i>
        </Link>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => props.deleteHandler(props.user)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  )
}
