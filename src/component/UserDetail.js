import React from 'react'

export const UserDetail = ({user,onDelete}) => {
  return (
      <>
    <div className="container">
        <h3>{user.name}</h3>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(user)}}>delete</button>
    </div>
    <hr/>
    </>
  )
}