import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: uuidv4(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContacts){
      setContacts(retrieveContacts)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
  <div className='ui container'>
    <Router>
      <Header />
      <Switch>
        <Route 
        path="/" 
        exact
        render={(props) => (
          <ContactList 
          {...props} 
          contacts={contacts} 
          getContactId={removeContactHandler}/>
        )} 
        />
        <Route 
        path="/add" 
        render={(props) => (
          <AddContact {...props} 
          addContactHandler={addContactHandler}
          />
        )}
        />
      </Switch>
    </Router>
    
    {/*<AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
  */}  
    </div>
  );
}

export default App;
