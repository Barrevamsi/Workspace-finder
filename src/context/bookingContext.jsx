import React, { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([]);

  const addBooking = (workspace) => {
    console.log("Adding booking:", workspace); 
    setBookings((prev) => {
      const updatedBookings = [...prev, workspace];
      console.log("Updated bookings:", updatedBookings); 
      return updatedBookings;
    });
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
