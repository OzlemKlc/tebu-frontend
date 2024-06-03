import React, { useState, useEffect } from 'react';

import { getVehicles } from '../../../api/customer';

import { MDBBtn } from 'mdb-react-ui-kit';

import "./index.css"

function VehicleList() {
    const [VehiclesResponse, setVehiclesResponse] = useState(undefined);
    const [allVehicles, setAllVehicles] = useState(undefined);
  
    const [shouldShowMoreButton, setShouldShowMoreButton] = useState(true);
  
    window.allVehicles = allVehicles;
  
  
    const getVehiclesResponse = () => {
      getVehicles(setVehiclesResponse);
  
    }
  
    useEffect(() => {
      getVehiclesResponse();
    }, []);
  
  
    useEffect(() => {
      if(VehiclesResponse?.length < 10)
      {
        setShouldShowMoreButton(false);
      }
  
      setAllVehicles([...(allVehicles??[]), ...VehiclesResponse??[]])
    }, [VehiclesResponse])
  
    return (
                  <>
                  {allVehicles?.length > 0 ? 
                      <table class="table align-middle mb-0 bg-white">
                      <thead class="bg-light">
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Model</th>
                          <th>Year</th>
                          <th>Brand</th>
                      </tr>
                      </thead>
                          <tbody>
                              {
                              allVehicles.map(e => {
                                  return (
                                      <tr>
                                      <td>{e.id}</td>
                                      <td>{e.name}</td>
                                      <td>{e.model}</td>
                                      <td>{e.year}</td>
                                      <td>{e.brand}</td>
                                      </tr>
                                  )
                              }) }
                          </tbody>
                      </table>
                      : 
                      <>
                      <p>
                      </p>
                      <p></p>
                      <div style={{display: "flex", margin:"150px", justifyContent: "center"}}>
                          <p>There is no vehicle yet.</p>
                      </div>
                      </>
                  }
              <p></p>
                  <p></p>
                  <p></p>
              </>
  ) 


}


export default VehicleList;