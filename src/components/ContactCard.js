import React from 'react'
import { Link } from 'react-router-dom';
import user from '../images/user.png'

function ContactCard({contact, clickHandler}) { 
  const { id, name, email } = contact;
  return (
    <div className='item' style={{ display: "flex", alignItems: "center", padding:"10px"}}>
              <img className='ui avatar image' src={user} alt="user"/>
              <div className='content' style={{ marginLeft:"20px"}}>
                  <Link to={{ pathname: `/contact/${id}`, state: { contact: contact}}}>
                    <div className='header'>
                        {name}
                    </div>
                    <div>{email}</div>
                  </Link>
              </div>
              <i className='trash alternate outline icon'
              style={{ color: "red", marginTop: "7px", marginLeft: "20px"}}
              onClick={() => clickHandler(id)}></i>
          </div>
  )
}

export default ContactCard