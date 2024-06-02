import React, { useEffect, useState } from "react";
import {
    MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";

import { getWorkers } from "../../../api/admin"; 

import "./index.css"

export default function WorkersPage() {

  const [workersResponse, setWorkersResponse] = useState(undefined);
  const [allWorkers, setAllWorkers] = useState(undefined);

  const [shouldShowMoreButton, setShouldShowMoreButton] = useState(true);

  window.allWorkers = allWorkers;

  const [pageIndex, setPageIndex] = useState(0);

  window.pageIndex = pageIndex;

  const getWorkersResponse = () => {
    getWorkers(10, pageIndex, setWorkersResponse);

    setPageIndex(pageIndex+1);
  }



  useEffect(() => {
    getWorkersResponse();
  }, []);


  useEffect(() => {
    if(workersResponse?.length < 10)
    {
      setShouldShowMoreButton(false);
    }

    setAllWorkers([...(allWorkers??[]), ...workersResponse??[]])
  }, [workersResponse])

  return allWorkers != null && (
      <>
        <table class="table align-middle mb-0 bg-white">
                  <thead class="bg-light">
                      <tr>
                          <th>Id</th>
                          <th>Phone Number</th>
                          <th>Person</th>
                          <th>Email</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                        allWorkers.map((e) => {
                          return (
                            <tr>
                              <td>
                                  <p class="fw-normal mb-1">{e.id}</p>
                              </td>
                              <td>
                                  <p class="fw-normal mb-1">{e.phoneNumber}</p>
                              </td>
                              <td>
                                  <p class="fw-normal mb-1">{e.name} {e.surname}</p>
                                  <p class="text-muted mb-0">Worker</p>
                              </td>
                              <td>
                                  <p>{e.email}</p>
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
          </table>
          <p></p>
          {
            shouldShowMoreButton &&
            <div style={{display: "flex", justifyContent: "center"}}>
                        <MDBBtn onClick={getWorkersResponse}>Load More</MDBBtn>
            </div>
          }
          
          <p></p>
          <p></p>
      </>
  );
}