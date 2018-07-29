import React from 'react';
import './login.css';


const login = (props) =>{
    return(
       
<div>
   <form onSubmit={props.submit}>
        <div className="container">
          <label><b>Username</b></label>
          <input type="text" placeholder="Enter Username" value={props.name}
              onChange={props.handleNameChange} required/>
      
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" value={props.password}
           onChange={props.handlePasswordChange} required/>
              
          <button type="submit">Login</button>
        </div>
     </form>
</div> 
    )
}

export default login;