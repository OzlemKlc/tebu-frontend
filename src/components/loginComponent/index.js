import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import "./index.css"

import { login, register } from '../../api/session';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;




  const onLoginClick = () => {
    var phone = document.getElementById("login1");
    var password = document.getElementById("login2");

    login(phone.value, password.value, window.setUserInfo)
  };

  const onRegisterClick = () => {
    var name = document.getElementById("r11");
    var surname = document.getElementById("r12");
    var phone = document.getElementById("r13");
    var email = document.getElementById("r14");
    var password = document.getElementById("r15");

    register(password.value, phone.value, email.value, name.value, surname.value, window.setUserInfo);
  }


  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-5 my-5 d-flex flex-column w-25 d-flex align-items-stretch">

      <img src="logo.png" class="img-thumbnail"/>
      <p></p>
      <p></p>
      <p></p>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane open={justifyActive === 'tab1'}>

        <p></p>
        <p></p>
        <p></p>

          <MDBInput wrapperClass='mb-4' label='Phone Number' id='login1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='login2' type='password'/>


          <MDBBtn className="mb-4 w-100" onClick={onLoginClick}>Sign in</MDBBtn>

        </MDBTabsPane>

        <MDBTabsPane open={justifyActive === 'tab2'}>

          <MDBInput wrapperClass='mb-4' label='Name' id='r11' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Surname' id='r12' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Phone Number' id='r13' type='tel'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='r14' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='r15' type='password'/>


          <MDBBtn className="mb-4 w-100" onClick={onRegisterClick}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;