import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBCheckbox,
  MDBInput
}
from 'mdb-react-ui-kit';

import { addAddress } from '../../../api/customer';

import "./index.css"

function NewAddressComponent() {

  
  const onRegisterClick = () => {
    var name = document.getElementById("r11");
    var fullAddress = document.getElementById("r12");
    var city = document.getElementById("r13");
    var district = document.getElementById("r14");

    addAddress(name.value, fullAddress.value, city.value, district.value, (e) => {
      window.goBackFunction(null);
    });
  }


  return (
    <MDBContainer className='p-5 my-5 d-flex flex-column w-50 d-flex align-items-stretch'>
      <MDBTabsContent >
        <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MDBBtn className='me-1'>
            NEW ADRESS
          </MDBBtn>
          </div>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Name' id='r11' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Full Address' id='r12' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='City' id='r13' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='District' id='r14' type='text'/>
          <p></p>

          <MDBBtn className="mb-4 w-100" onClick={onRegisterClick}>CREATE</MDBBtn>
      </MDBTabsContent>
    </MDBContainer>
) 
}

export default NewAddressComponent;