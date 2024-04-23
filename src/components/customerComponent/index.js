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

import OrderList from "../OrderListComponent"

import "./index.css"

function CustomerPage() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Orders
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Vehicles
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Adresses
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane open={justifyActive === 'tab1'}>
          <MDBBtn className='me-1'>
            New Order
          </MDBBtn>
          <p></p>
          <OrderList></OrderList>
        </MDBTabsPane>

        <MDBTabsPane open={justifyActive === 'tab2'}>

        </MDBTabsPane>

      </MDBTabsContent>
      </div>
  );
}

export default CustomerPage;