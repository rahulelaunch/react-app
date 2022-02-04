// import React from 'react'
import React, { useState } from 'react';

export const Adduser = ({adduser}) => {

    const [name, setName] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!name){
            alert('please add name')
        }else{

            adduser(name);
            setName("");
        }
    }


  return (
      <div className="container">
          <h3>Add User</h3>
          <form onSubmit={submit}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">user name</label>
                  <input type="text"  value={name} onChange={(e)=>{
                      setName(e.target.value)
                  }} className="form-control" id="name" aria-describedby="emailHelp"/>  
              </div>
              <button type="submit" className="btn btn-sm btn-primary">Add</button>
          </form>
      </div>
  )
}



