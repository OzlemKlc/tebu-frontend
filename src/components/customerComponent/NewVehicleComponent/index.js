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


import { addVehicle } from "../../../api/customer/index"

import "./index.css"

function NewVehicleComponent() {
  
  const onRegisterClick = () => {
    var name = document.getElementById("r11");
    var model = document.getElementById("r12");
    var year = document.getElementById("r13");
    var brand = document.getElementById("r14");

    addVehicle(name.value, model.value, parseInt(year.value), brand.value, (e) => {
      window.goBackFunction(null);
    });
  }


  return (
    <MDBContainer className='p-5 my-5 d-flex flex-column w-50 d-flex align-items-stretch'>
      <MDBTabsContent >
        <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MDBBtn className='me-1'>
            NEW VEHICLE
          </MDBBtn>
          </div>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Name' id='r11' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Model' id='r12' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Year' id='r13' type='number'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Brand' id='r14' type='text'/>
          <p></p>

          <MDBBtn className="mb-4 w-100" onClick={onRegisterClick}>CREATE</MDBBtn>
      </MDBTabsContent>
    </MDBContainer>
) 

}

export default NewVehicleComponent;