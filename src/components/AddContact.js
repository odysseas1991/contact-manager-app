import React, {useState} from 'react'


function AddContact({addContactHandler}) {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: ""
    })

  function handleNameInputChange(e){
      setContact({...contact, name: e.target.value})
  }

  function handleEmailInputChange(e){
    setContact({...contact, email: e.target.value})
}

  function add(e){
    e.preventDefault();
    if(contact.name === '' || contact.email === ''){
        alert('All the fields are required!')
        return
    }

    addContactHandler(contact)
    //Reset form fields
    setContact({name: "", email: ""})

  }

  return (
    <div className='ui main contact-form'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={add}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='Name'
                value={contact.name}
                onChange={handleNameInputChange}/>
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='Email'
                value={contact.email}
                onChange={handleEmailInputChange}/>
            </div>
            <button className='ui button blue'>Add</button>
        </form>
    </div>
  )
}

export default AddContact