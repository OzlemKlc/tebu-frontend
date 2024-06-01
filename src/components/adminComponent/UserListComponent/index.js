import React from "react";
import {
    MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";

import "./index.css"

export default function WorkersPage() {
  return (
    <>
      <section className="" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="8" xl="6">
              <MDBCard className="border-top border-bottom border-3 border-color-custom">
                <MDBCardBody className="p-5">
                  <p className="lead fw-bold mb-1" style={{ color: "rgb(60, 115, 206)" }}>
                    Purchase Reciept
                  </p>

                  <MDBRow>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Car Owner</p>
                      <p>Murat Bozkurt <br/>0 551 121 76 96</p>
                    </MDBCol>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Valet</p>
                      <p>Hakkı Gümüşlü <br/>0 555 122 77 77</p>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Date</p>
                      <p>10 April 2021</p>
                    </MDBCol>
                    <MDBCol className="mb-1">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>012j1gvs356c</p>
                    </MDBCol>
                  </MDBRow>

                  <div
                    className="mx-n5 px-5 py-3"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p>Washing etc</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p>£299.99</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="8" lg="9">
                        <p className="mb-0">Service</p>
                      </MDBCol>
                      <MDBCol md="4" lg="3">
                        <p className="mb-0">£33.00</p>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <MDBRow className="my-3">
                    <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                      <p
                        className="lead fw-bold mb-0"
                        style={{ color: "rgb(60, 115, 206)" }}
                      >
                        £262.99
                      </p>
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
                              className="py-1 px-2 rounded "
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                            >
                              Ordered
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className="py-1 px-2 rounded "
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                            >
                              Shipped
                            </MDBBtn>
                          </li>
                          <li className="list-inline-item items-list">
                            <MDBBtn
                              className="py-1 px-2 rounded "
                              style={{ backgroundColor: "rgb(60, 115, 206)" }}
                            >
                              On the way
                            </MDBBtn>
                          </li>
                          <li
                            className="list-inline-item items-list text-end"
                            style={{ marginRight: "-8px" }}
                          >
                            <MDBBtn 
                                className="py-1 px-2 rounded not-happened"  
                                style={{ marginRight: "-8px" }}
                            >
                                Delivered
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