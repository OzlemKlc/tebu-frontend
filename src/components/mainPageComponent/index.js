import React, { useState } from 'react';
import {
  MDBContainer,
  MDBBtnGroup,
  MDBBtn
}
from 'mdb-react-ui-kit';
import WorkerPage from '../employeeComponent';
import CustomerPage from "../customerComponent"
import AdminPage from "../adminComponent"

import { logout } from '../../api/session';

import "./index.css"

function MainPage() {
    const [goBackFunction, setGoBackFunction] = useState(null);
    window.goBackFunction = goBackFunction;
    window.setGoBackFunction = (f) => {
        setGoBackFunction(() => (e) => {
            f(e);
            setGoBackFunction(null);
        })
    }

    const onLogoutClick = () => {
        logout(window.setUserInfo)
    }

  return (
    <MDBContainer className="p-4 my-5 d-flex flex-column w-100">
        {
            goBackFunction == undefined ? <p></p> :
                <MDBBtnGroup className='justify-content-between' toolbar aria-label='Toolbar with button groups'>
                    <div></div>
                    <MDBBtn onClick={(e) => (goBackFunction(e))}>Go Back</MDBBtn>
                </MDBBtnGroup>
        }
    <nav class="navbar navbar-expand-lg fixed-top flex-column  d-flex" style={{backgroundColor: "white", margin: "auto"}}>
        <div class="container-fluid w-75">
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
                <img src='logo.png' style={{maxHeight:50}}></img>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <div class="d-flex align-items-center justify-content-start">
                        <a onClick={onLogoutClick}class="nav-link me-3 nav-item nav-link" href="#">Logout</a>
                </div>
            </div>
        </div>
    </nav>

    <p></p>
    {
        window.userInfo.userRole == "Admin" ? 
        <AdminPage></AdminPage> :
        window.userInfo.userRole == "Worker" ?
        <WorkerPage></WorkerPage> :
        <CustomerPage></CustomerPage>
    }

      <footer class=" fixed-bottom border-top d-flex" style={{margin:"auto"}} >
        <div class="container p-2 pb-0">
            <section class="mb-2">
                <div class="text-center">
                    © 2024 Copyright <strong style={{color: "#285192"}}>TEBU</strong>
                </div>
            </section>
        </div>
            
        </footer>
    </MDBContainer>
  );
}

export default MainPage;