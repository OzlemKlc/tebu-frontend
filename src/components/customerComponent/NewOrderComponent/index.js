import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBCheckbox,
  MDBInput,
  MDBSelect
}
from 'mdb-react-ui-kit';
import Select from "react-dropdown-select";
import { getVehicles, getAddresses } from "../../../api/customer/index"

import { createOrder } from "../../../api/order/index"

import "./index.css"


const services = [
  {
    value: "FullServiceWash",
    label: "Full Service Wash",
    description: "Safely cleaning the exterior and interior"
  },
  {
    value: "ManagersSpecialFullService",
    label: "Managers Special Full Service",
    description: "Everything in the Full Service Wash plus: tri-color conditionar, under chassis flush, wheel cleaning"
  },
  {
    value: "ExtremeShineFullService",
    label: "Extreme Shine Full Service",
    description: "Everything in the Managers Special Service plus: Shield Waw and Tire Shine"
  },
  {
    value: "PremiumExteriorWash",
    label: "Premium Exterior Wash",
    description: "Safely cleaning the exterior"
  },
  {
    value: "UltimateExteriorWash",
    label: "Ultimate Exterior Wash",
    description: "Safely cleaning the exterior plus: under chassis cleaning"
  },
  {
    value: "EliteExteriorWash",
    label: "Elite Exterior Wash",
    description: "Everything in the Ultimate Exterior Wash plus: waxing and tire shine"
  },
]


function NewOrderComponent() {


  const onRegisterClick = () => {
    var vehicleId = document.getElementById("r12");
    var addressId = document.getElementById("r13");
    var orderNote = document.getElementById("r14");

    createOrder(wantedService.value, vehicle.value, adress.value, orderNote.value, (e) => {
      window.goBackFunction(null);
    });
  }

  const [wantedService, setWantedService] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [adress, setAdress] = useState(null);

  const [vehicles, setVehicles] = useState(null);
  const [adresses, setAdresses] = useState(null);

  useEffect(() => {
    getAddresses(setAdresses);
    getVehicles(setVehicles);
  }, [])


  window.wantedService = wantedService;

  return (
    <MDBContainer className='p-5 my-5 d-flex flex-column w-50 d-flex align-items-stretch'>
      <MDBTabsContent >
        <p></p>
          <div style={{display: "flex", justifyContent: "center"}}>
          <MDBBtn className='me-1'>
            NEW ORDER
          </MDBBtn>
          </div>
          <p></p>
          <Select options={services} onChange={(values) => setWantedService(values[0])} placeholder='Select Service'/>
          {
            wantedService != null &&
            <><p></p> <p>{wantedService.description}</p></>
          }
          <p></p>
          <Select options={vehicles?.map(s => {return { label: s.name, value: s.id}})} onChange={(values) => setVehicle(values[0])} placeholder='Select your vehicle'/>
          <p></p>
          <Select options={adresses?.map(s => {return { label: s.name, value: s.id}})} onChange={(values) => setAdress(values[0])} placeholder='Select your adress'/>
          <p></p>
          <MDBInput wrapperClass='mb-4' label='Order Note' id='r14' type='text'/>
          <p></p>

          <MDBBtn className="mb-4 w-100" onClick={onRegisterClick}>CREATE</MDBBtn>
      </MDBTabsContent>
    </MDBContainer>
) 
}

export default NewOrderComponent;