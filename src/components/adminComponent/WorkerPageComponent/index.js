import React, { useState } from 'react';

import { MDBInput, MDBBtn, MDBContainer,MDBTabsContent } from 'mdb-react-ui-kit';

import { createWorker } from '../../../api/admin';


import "./index.css"

function WorkerPage() {

  const onRegisterClick = () => {
    var name = document.getElementById("r11");
    var surname = document.getElementById("r12");
    var phone = document.getElementById("r13");
    var email = document.getElementById("r14");
    var password = document.getElementById("r15");

    createWorker(password.value, phone.value, email.value, name.value, surname.value, (e) => {
      window.goBackFunction(null);
    });
  }


  return (
    <MDBContainer className='p-5 my-5 d-flex flex-column w-50 d-flex align-items-stretch'>
      <MDBTabsContent >
        <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MDBBtn className='me-1'>
            NEW WORKER
          </MDBBtn>
          </div>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Name' id='r11' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Surname' id='r12' type='text'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='r13' type='tel'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Email' id='r14' type='email'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Password' id='r15' type='password'/>
          <p></p>

          <MDBBtn className="mb-4 w-100" onClick={onRegisterClick}>REGISTER</MDBBtn>
      </MDBTabsContent>
    </MDBContainer>
) 

}


export default WorkerPage;