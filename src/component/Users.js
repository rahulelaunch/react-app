import React from 'react'
import {UserDetail} from './UserDetail';


export const Users = (props) => {
  return (
    <div className="container">
        <h3 className="my-3" >users list</h3>
          {props.users.length === 0 ? "no user found" :
              props.users.map((user) => {
                  return (<UserDetail user={user} key={user.no} onDelete={props.onDelete} /> )
              }
              )
          }
         
    </div>
  )
}