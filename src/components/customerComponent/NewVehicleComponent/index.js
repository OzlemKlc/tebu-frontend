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


import "./index.css"

function NewVehicleComponent() {
  

  return <MDBContainer className="p-5  d-flex flex-column w-75 d-flex align-items-stretch">
  <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
    <MDBTabsItem>
      <MDBTabsLink >
        New Vehicle
      </MDBTabsLink>
    </MDBTabsItem>
  </MDBTabs>

  <MDBTabsContent>

    <MDBTabsPane open={true}>

    <p></p>
    <p></p>
    <p></p>

      <MDBInput wrapperClass='mb-4' label='Vehicle Name' id='form1' />
      <MDBInput wrapperClass='mb-4' label='Brand' id='form1' />
      <MDBInput wrapperClass='mb-4' label='Model' id='form1' />
      <MDBInput wrapperClass='mb-4' label='Car Notes' id='form2' />

      <MDBBtn className="mb-4 w-100">Save</MDBBtn>

    </MDBTabsPane>


  </MDBTabsContent>

</MDBContainer>
}

export default NewVehicleComponent;