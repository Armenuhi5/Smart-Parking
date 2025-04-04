import React, { createContext, useState } from 'react';

// Create the Reservation Context
export const ReservationContext = createContext();

// Create the Reservation Context Provider
export const ReservationProvider = ({ children }) => {
  // Initialize state for reservations
  const [reservations, setReservations] = useState([]);

  // Function to add a new reservation
  const addReservation = (reservation) => {
    setReservations((prevReservations) => [...prevReservations, reservation]);
  };

  // Function to remove a reservation (if needed)
  const removeReservation = (reservation) => {
    setReservations((prevReservations) =>
      prevReservations.filter((res) => res !== reservation)
    );
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation, removeReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
