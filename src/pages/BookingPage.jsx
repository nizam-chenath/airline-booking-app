import  { useState } from 'react';
import '../styles/BookingPage.scss';

function BookingPage({ flight }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement flight booking
    setIsSubmitted(true);
  };

  return (
    <div className="booking-page">
      <div className="booking-form">
        <h2>Book Flight</h2>
        <div className="flight-details">
          <div className="flight-detail-item">
            <span className="label">Flight Name:</span>
            <span className="value">{flight.airline}</span>
          </div> <br></br>
          <div className="flight-detail-item">
            <span className="label">Departure:</span>
            <span className="value">{flight.origin}</span>
          </div>
          <div className="flight-detail-item">
            <span className="label">Destination:</span>
            <span className="value">{flight.destination}</span>
          </div>
          <div className="flight-detail-item">
            <span className="label">Arrival :</span>
            <span className="value">{flight.arrivalTime}</span>
          </div>
          <div className="flight-detail-item">
            <span className="label">Departure:</span>
            <span className="value">{flight.departureTime}</span>
          </div>
          <div className="flight-detail-item">
            <span className="label">Price:</span>
            <span className="value">{flight.price}</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passengers">Passengers:</label>
            <input
              type="number"
              id="passengers"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            />
          </div>
          <button type="submit">Book Now</button>
        </form>
        {isSubmitted && <div className="success-message">Booking successful!</div>}
      </div>
    </div>
  );
}

export default BookingPage;
