import logo from './logo.svg';
// import './App.css';
import Header from './component/Header';
import {Footer} from './component/Footer';
import {Users} from './component/Users';
import {Adduser} from './component/Adduser';
import {About} from './component/About';
// import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




function App() {
let inituser;
if(localStorage.getItem("users")===null){
  inituser=[];
}else{
  inituser=JSON.parse(localStorage.getItem("users"))
}

  const onDelete=(user)=>{
   console.log('deleted',user);
   setUser(users.filter((e)=>{
     return e!==user
   }));
   localStorage.setItem("users",JSON.stringify(users));
  }

  const adduser = (name) => {
    let no;
    if (users.length == 0) {
      no = 0;
    } else {

       no = users[users.length - 1].no + 1;
    }
    const myuser = {
      no: no,
      name: name,
    }
    setUser([...users,myuser]);
   
    console.log(myuser);
  }

  const [users, setUser] = useState(inituser);
  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(users));
  },[users]);


  return (
  <>
  <Router>
  <Header title="React" searchBar={true}/>
     <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <Adduser adduser={adduser}/>
              <Users users={users} onDelete={onDelete}/>
              </>
            );
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
     </Switch>

  <Footer/>
  </Router>
  </>
  
  );  
}

export default App;
