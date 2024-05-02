import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn
}
from 'mdb-react-ui-kit';

import OrderList from "./OrderListComponent"
import AddressList from "./AddressListComponent"
import VehicleList from "./VehicleListComponent"

import NewAddressComponent from './NewAddressComponent';
import NewOrderComponent from './NewOrderComponent'
import NewVehicleComponent from './NewVehicleComponent'

import "./index.css"

function CustomerPage() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const [mainActivePage, setMainActivePage] = useState("NewAddress"); // Tabs, NewOrder, NewAddress, NewVehicle
  
  window.currentCallbackPage = "Tabs"; //Tabs, NewOrder
  window.callbackPageDate = {};

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return mainActivePage == "Tabs" ? (
    <div>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Orders
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Adresses
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Vehicles
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane open={justifyActive === 'tab1'}>
        <img src="Car-wash-owner.jpg" class="img-fluid" alt="Wild Landscape" />
          <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MDBBtn className='me-1'>
            New Order
          </MDBBtn>
          </div>
          <p></p>
          <OrderList></OrderList>
        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab2'}>
        <img src="Address.jpeg" class="img-fluid" alt="Wild Landscape" />
          <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
            <MDBBtn className='me-1'>
            Register New Address
            </MDBBtn>
          </div>
            <p></p>
            <AddressList></AddressList>
          
        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab3'}>
        <img src="Vehicles.jpeg" class="img-fluid" alt="Wild Landscape" />
          <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
            <MDBBtn className='me-1'>
              Register New Vehicle
            </MDBBtn>
            </div>
            <p></p>
            <VehicleList></VehicleList>
          
        </MDBTabsPane>

      </MDBTabsContent>
      </div>
  ) : 
  mainActivePage == "NewOrder" ? <NewOrderComponent></NewOrderComponent> :
  mainActivePage == "NewAddress" ? <NewAddressComponent></NewAddressComponent> : 
  mainActivePage == "NewVehicle" ? <NewVehicleComponent></NewVehicleComponent> 
  : <></>;
}

export default CustomerPage;