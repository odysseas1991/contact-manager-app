import React from 'react'
import user from '../images/user.png'

function ContactCard({contact}) { 
  const { name, email } = contact;
  return (
    <div className='item' style={{ display: "flex", alignItems: "center", padding:"10px"}}>
              <img className='ui avatar image' src={user} alt="user"/>
              <div className='content' style={{ marginLeft:"20px"}}>
                  <div className='header'>
                    {name}
                  </div>
                  <div>{email}</div>
              </div>
              <i className='trash alternate outline icon'
              style={{ color: "red", marginTop: "7px", marginLeft: "20px"}}></i>
          </div>
  )
}

export default ContactCard