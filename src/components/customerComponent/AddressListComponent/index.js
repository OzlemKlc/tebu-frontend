import React, { useState, useEffect } from 'react';

import "./index.css"

import { getAddresses } from "../../../api/customer/index"

import { MDBBtn } from 'mdb-react-ui-kit';

function AddressList() {

    const [AddressesResponse, setAddressesResponse] = useState(undefined);
    const [allAddresses, setAllAddresses] = useState(undefined);
  
    const [shouldShowMoreButton, setShouldShowMoreButton] = useState(true);
  
    window.allAddresses = allAddresses;
  
  
    const getAddressesResponse = () => {
      getAddresses(setAddressesResponse);
  
    }
  
    useEffect(() => {
      getAddressesResponse();
    }, []);
  
  
    useEffect(() => {
      if(AddressesResponse?.length < 10)
      {
        setShouldShowMoreButton(false);
      }
  
      setAllAddresses([...(allAddresses??[]), ...AddressesResponse??[]])
    }, [AddressesResponse])
  
    return (
                  <>
                  {allAddresses?.length > 0 ? 
                      <table class="table align-middle mb-0 bg-white">
                      <thead class="bg-light">
                      <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Full Address</th>
                          <th>City</th>
                          <th>District</th>
                      </tr>
                      </thead>
                          <tbody>
                              {
                              allAddresses.map(e => {
                                  return (
                                      <tr>
                                      <td>{e.id}</td>
                                      <td>{e.name}</td>
                                      <td><p>{e.fullAdress}</p></td>
                                      <td>{e.city}</td>
                                      <td>{e.district}</td>
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
                          <p>There is no address yet.</p>
                      </div>
                      </>
                  }
              <p></p>
            
                  <p></p>
                  <p></p>
              </>
  ) 

}


export default AddressList;