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

import WorkerPage from "./WorkerPageComponent"
import WorkerList from "./WorkerListComponent"
import Statistics from './statisticsComponent';

import "./index.css"

function AdminPage() {

  const [justifyActive, setJustifyActive] = useState('tab1');

  const [mainActiveAdminPage, setmainActiveAdminPage] = useState("Tabs"); // Tabs, WorkerPage
  
  
  const newWorkerFunction = () => {
    window.setGoBackFunction(() => {
      window.setmainActiveAdminPage("Tabs");
    });

    window.setmainActiveAdminPage("WorkerPage");
  }


  window.setmainActiveAdminPage = setmainActiveAdminPage;
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return mainActiveAdminPage == "Tabs" ? (
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
          <MDBBtn onClick={newWorkerFunction} className='me-1'>
            New Worker
          </MDBBtn>
          </div>
          <p></p>
          <WorkerList></WorkerList>
        </MDBTabsPane>
        <MDBTabsPane open={justifyActive === 'tab2'}>
        <img src="carwashers.jpg" class="img-fluid" alt="Wild Landscape" />
          <Statistics></Statistics>
          
        </MDBTabsPane>
      </MDBTabsContent>
      </>
  ) :
  mainActiveAdminPage == "WorkerPage" ? <WorkerPage></WorkerPage>
  : <></>;
}

export default AdminPage;