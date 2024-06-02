import React, { useState } from "react";
import {
    MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";

import "./index.css"

import {changeOrderStatus} from "../../../api/order/index"

const statuses = {
  WaitingToGetAccepted : 0,
  Accepted : 1,
  GoingToCenter : 2,
  Arrived : 3,
  InOperation : 4,
  Drying : 5,
  WayBack : 6,
  Delivired : 7
}

export default function OrderPage() {
  const [randomKey,setRandomKey] = useState(1);

  const changestatusButton = (data) => {
    console.log("ééééééééééééééééé", data);


    window.currentOrder = data;

    setRandomKey(randomKey + 1);
  }

  return (
    <>
      <section key={randomKey} className="" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol >
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-1" style={{ color: "rgb(60, 115, 206)" }}>
                    Purchase Reciept
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Car Owner</p>
                      <p>{window.currentOrder.customer.name + " " + window.currentOrder.customer.surname} <br/>{window.currentOrder.customer.phoneNumber}</p>
                    </MDBCol>
                    <MDBCol className="mb-1">
                        <p className="small text-muted mb-1">Valet</p>
                        {
                          window.currentOrder.worker == undefined ? <><p>Waiting<br/>Please change status to take charge of this order.</p></> :
                          <p>{window.currentOrder.worker.name + " " + window.currentOrder.worker.surname}<br/>{window.currentOrder.worker.phoneNumber}</p>
                        }
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Date</p>
                      <p>{window.currentOrder.creationDate}</p>
                    </MDBCol>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>{window.currentOrder.id}</p>
                    </MDBCol>
                  </MDBRow>

                  <p
                    className="lead fw-bold mb-4 pb-2"
                    style={{ color: "rgb(60, 115, 206)" }}
                  >
                    Tracking Order
                  </p>

                  <MDBRow>
                    <MDBCol lg="12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className="py-1 px-2 rounded"
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                            >
                              Waiting
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status] < 1 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "Accepted", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                              Accepted
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status]  < 2 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "GoingToCenter", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                              Going To Center
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status]  < 3 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "Arrived", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                                Arrived
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status]  < 4 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "InOperation", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                              In Operation
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status]  < 5 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "Drying", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                              Drying
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status]  < 6 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "WayBack", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                              Way Back
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className={"py-1 px-2 rounded " + (statuses[window.currentOrder.status] < 7 ? "not-happened" : "")}
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                              onClick={() => {
                                changeOrderStatus(window.currentOrder.id, "Delivired", (data) => {
                                  changestatusButton(data);
                                })
                              }}
                            >
                              Delivired
                            </MDBBtn>
                          </li>
                        </ul>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <p className="mt-4  mb-0">
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}