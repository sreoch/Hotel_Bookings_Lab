import React, { useState } from "react";

const Form = ({onBookingSubmit}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [checkedIn, setCheckedIn] = useState(0)

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    }

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }

    const handleCheckedInChange = (evt) => {
        setCheckedIn(evt.target.value)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        if(!name || !email){
            return
        }

        onBookingSubmit({
            name: name,
            email: email
        })

        setName("");
        setEmail("");
    }
    
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Enter Name" value={name} onChange={handleNameChange}/>
            <input type="text" placeholder="Enter Email" value={email} onChange={handleEmailChange}/>
            <input type="checkbox" value={checkedIn} onChange={handleCheckedInChange}/>
            <input type="submit" value="Submit" />
        </form>
    )
}
export default Form;