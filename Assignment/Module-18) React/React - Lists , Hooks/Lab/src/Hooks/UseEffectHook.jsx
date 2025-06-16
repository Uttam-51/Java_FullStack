import axios from 'axios'
import React, { useEffect, useState } from 'react'
// Task 2: 
//  -Use the useEffect() hook to fetch and display data from an API when the 
//   component mounts.
export default function UseEffectHook() {

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log('Inside fetchData');
    setUsers(apiResponse.data);
  }

  useEffect(() => {
    // console.log('Inside useeffect');
    fetchData();
  }, []);


  return (
    <div>
      <hr />
      <h1>useEffect hook example using API</h1>

      <table className="table table-bordered border-primary">
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th className='col-3' scope="col">ID</th>
            <th className='col-3' scope="col">Name</th>
            <th className='col-3' scope="col">City</th>
            <th className='col-3' scope="col">Company Name</th>
          </tr>
        </thead>

        <tbody>
          {
            users && users.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{value.id}</th>
                  <td>{value.name}</td>
                  <td>{value.address.city}</td>
                  <td>{value.company.name}</td>
                </tr>
              )
            })
          }
        </tbody>

      </table>
      <hr />
    </div>
  )
}