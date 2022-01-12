import React from "react";

const Booking = ({booking}) => {
    
    return(
        <>
            <h1>{booking.name}</h1>
            <p>Email: {booking.email}</p>
        </>
    )
}
export default Booking;