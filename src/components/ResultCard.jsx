import React from 'react'

const ResultCard = ({result, handleSelectedFlight}) => {
  return (
    <div className="result-card" key={result.id}>
              <div className="result-card-header">{result.airline}</div>
              <div className="result-card-body">
                <div className="flight-details">
                  <div className="flight-detail-item">
                    <i className="icon fas fa-plane-departure"></i>
                    <div>From: {result.departureTime}</div>
                  </div>
                  <div className="flight-detail-item">
                    <i className="icon fas fa-plane-arrival"></i>
                    <div>To: {result.arrivalTime}</div>
                  </div>
                  <div className="flight-detail-item">
                    <i className="icon fas fa-clock"></i>
                    <div>Time: {result.duration}</div>
                  </div>
                </div>
                <div className="price">Price :{result.price}</div>
                <div className="price" onClick={() => handleSelectedFlight(result)}>
                    <button  style={{backgroundColor: "gray", width: "200px", height: "40px" , border: "none" , borderRadius: "10px"}}>Book Now</button>
                </div>
              </div>
            </div>
  )
}

export default ResultCard