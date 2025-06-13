import React from 'react'

export default function UserCard({ name, age, location }) {
  return (
    <div className="col-md-3">
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Age: {age} years old</h6>
          <p className="card-text">Location: {location}</p>
        </div>
      </div>
      </div>
  )

}
