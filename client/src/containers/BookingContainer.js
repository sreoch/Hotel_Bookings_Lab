import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import BookingList from "../components/BookingList";
import BookingsService from "../services/BookingsService";

const BookingContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        BookingsService.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const createBooking = (newBooking) => {
        BookingsService.postBooking(newBooking)
        .then(savedBooking => setBookings([...bookings, savedBooking]))
    }

    return(
        <>
        <h1>This is the container</h1>
        <Form onBookingSubmit={createBooking}/>
        <BookingList bookings={bookings} />
        </>
    )
}
export default BookingContainer;