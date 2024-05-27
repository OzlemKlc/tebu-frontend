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

import OrderList from "./OrderListComponent"
import OrderPage from "./OrderPageComponent"

import "./index.css"

function WorkerPage() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const [mainActivePage, setMainActivePage] = useState("OrderPage"); // Tabs, OrderPage
  
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
            Orders
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane open={justifyActive === 'tab1'}>
        <img src="carwashers.jpg" class="img-fluid" alt="Wild Landscape" />
          <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          </div>
          <p></p>
          <OrderList></OrderList>
        </MDBTabsPane>

      </MDBTabsContent>
      </>
  ) :
  mainActivePage == "OrderPage" ? <OrderPage></OrderPage>
  : <></>;
}

export default WorkerPage;