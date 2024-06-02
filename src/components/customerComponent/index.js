import React, { useEffect, useState } from 'react';
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

  const [mainActiveCustomerPage, setmainActiveCustomerPage] = useState("Tabs"); // Tabs, NewOrder, NewAddress, NewVehicle
  
  const [currentActiveTab, setCurrentActiveTab] = useState(null);

  window.currentActiveTab = currentActiveTab;
  window.setCurrentActiveTab = setCurrentActiveTab;


  window.mainActiveCustomerPage = mainActiveCustomerPage;
  window.setmainActiveCustomerPage = setmainActiveCustomerPage;
  useEffect(() => {
    if(window.currentActiveTab != null)
      setJustifyActive(window.currentActiveTab);
  }, [window.currentActiveTab]);

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const newOrderFunction = () => {

    window.setGoBackFunction(() => {
      window.setmainActiveCustomerPage("Tabs");
      window.setCurrentActiveTab("tab1");
    });

    window.setmainActiveCustomerPage("NewOrder");
  }
  const newAddressFunction = () => {
    window.setGoBackFunction(() => {
      window.setmainActiveCustomerPage("Tabs");
      window.setCurrentActiveTab("tab2");
    });

    window.setmainActiveCustomerPage("NewAddress");
  }
  const newVehicleFunction = () => {
    window.setGoBackFunction(() => {
      window.setmainActiveCustomerPage("Tabs");
      window.setCurrentActiveTab("tab3");
    });

    window.setmainActiveCustomerPage("NewVehicle");
  }

  return mainActiveCustomerPage == "Tabs" ? (
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
          <MDBBtn onClick={newOrderFunction} className='me-1'>
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
            <MDBBtn onClick={newAddressFunction} className='me-1'>
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
            <MDBBtn onClick={newVehicleFunction} className='me-1'>
              Register New Vehicle
            </MDBBtn>
            </div>
            <p></p>
            <VehicleList></VehicleList>
          
        </MDBTabsPane>

      </MDBTabsContent>
      </div>
  ) : 
  mainActiveCustomerPage == "NewOrder" ? <NewOrderComponent></NewOrderComponent> :
  mainActiveCustomerPage == "NewAddress" ? <NewAddressComponent></NewAddressComponent> : 
  mainActiveCustomerPage == "NewVehicle" ? <NewVehicleComponent></NewVehicleComponent> 
  : <>AAAAA</>;
}

export default CustomerPage;