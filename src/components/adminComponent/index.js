import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBBtnGroup
}
from 'mdb-react-ui-kit';

import WorkerList from "./UserPageComponent"
import OrderPage from "./UserListComponent"

import "./index.css"

function WorkerPage() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const [mainActivePage, setMainActivePage] = useState("Tabs"); // Tabs, OrderPage
  
  window.currentCallbackPage = "Tabs"; //Tabs, NewOrder
  window.callbackPageDate = {};

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return mainActivePage == "Tabs" ? (
    <>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Workers
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Statistics
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane open={justifyActive === 'tab1'}>
        <img src="carwashers.jpg" class="img-fluid" alt="Wild Landscape" />
          <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MDBBtn className='me-1'>
            New Worker
          </MDBBtn>
          </div>
          <p></p>
          <WorkerList></WorkerList>
        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab2'}>
        <img src="carwashers.jpg" class="img-fluid" alt="Wild Landscape" />
          
          
        </MDBTabsPane>
      </MDBTabsContent>
      </>
  ) :
  mainActivePage == "OrderPage" ? <OrderPage></OrderPage>
  : <></>;
}

export default WorkerPage;