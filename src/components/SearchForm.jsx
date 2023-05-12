import  { useState } from 'react';
import flightsData from '../json/details.json'

import '../styles/formstyle.scss'
import ResultCard from './ResultCard';

const SearchPage = ({handleSelectedFlight}) => {

  const [searchParams, setSearchParams] = useState({
    origin: 'cochin',
    destination: 'delhi',
    date: ''
  });

  const [flights, setFlights] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = e => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { origin, destination, date } = searchParams;
    // Filter flights based on search parameters
    const filteredFlights = flightsData.filter(flight => {
      return (
        flight.origin.toLowerCase() === origin.toLowerCase() &&
        flight.destination.toLowerCase() === destination.toLowerCase() 
        
      );
    });
    setFlights(filteredFlights);
    setShowResults(true);
  };

  return (
    <>
    
    
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="origin">Origin:</label>
        <input type="text" id="origin" name="origin" value={searchParams.origin} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <input type="text" id="destination" name="destination" value={searchParams.destination} onChange={handleInputChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={searchParams.date} onChange={handleInputChange}  />
      </div>

      <button type="submit">Search</button>


    </form>
    
    
    {showResults && flights.length > 0 && (
        <div className="flight-results">
          <h2>Available Flights:</h2>
          

          <div className="search-results">
          {flights.map(result => (
            <ResultCard result={result}  handleSelectedFlight={handleSelectedFlight}/>
          ))}
        </div>
        </div>
      )}
    

   

      {showResults && flights.length === 0 && (
        <div className="no-results">
          <h2>No flights found for the selected search parameters.</h2>
        </div>
      )}

      </>
  );
};

export default SearchPage;
