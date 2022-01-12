import React from "react";
import Booking from "./Booking";

const BookingList = ({bookings}) => {
    
    const bookingNodes = bookings.map((booking) => {
        return (
            <Booking key={booking._id} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} />

        )
    })

    return(
        <>
        <h3>Booking List</h3>
        {bookingNodes}
        </>
    )
}
export default BookingList;