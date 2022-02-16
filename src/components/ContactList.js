import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

function ContactList({contacts, getContactId}) {
  const deleteContactHandler = (id) => {
    getContactId(id)
  }

  const renderContactList = contacts.map((contact) => {
      return (
          <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} ></ContactCard>
      )
  }) 
  return (
      <div className='main' >
          <div style={{ display: "flex", margin:"10px"}}>
            <h2 style={{ marginRight:"50px"}}>Contact list</h2>
            <Link to='/add'>
                <button className='ui button blue right'>Add Contact</button>
            </Link>
          </div>
        <div className='ui celled list'>{renderContactList}</div>
      </div>
    
  )
}

export default ContactList