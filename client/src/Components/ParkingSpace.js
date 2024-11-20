import React from 'react'
import '../Styles/ParkingSpace.css';
const ParkingSpace = () => {
  return (
    <div className='mainContainerparkingspace'>
        <div> 
            <h1>Parking Space</h1>
        </div>
    <div className='ParkingSpaceContainer'>
      <div className='twowheeler'>
        <h2>2 wheeler</h2>
        <div className='allWheelContainer'>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>

        </div>
      </div>

      <div className='threewheeler'>
        <h2>3 wheeler</h2>
        <div  className='allWheelContainer'>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>

        </div>
      </div>

      <div className='fourwheeler'>
        <h2>4 wheeler</h2>
        <div  className='allWheelContainer'>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>
            <span>Available</span>

        </div>
      </div>
    </div>
    </div>
  )
}

export default ParkingSpace