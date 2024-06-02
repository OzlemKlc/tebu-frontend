import React, { useState, useEffect } from 'react';

import "./index.css"

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

import { getCustomerOrders } from "../../../api/order/index"

function OrderList() {

  const [OrdersResponse, setOrdersResponse] = useState(undefined);
  const [allOrders, setAllOrders] = useState(undefined);

  const [shouldShowMoreButton, setShouldShowMoreButton] = useState(true);

  window.allOrders = allOrders;

  const [pageIndex, setPageIndex] = useState(0);

  window.pageIndex = pageIndex;

  const getOrdersResponse = () => {
    getCustomerOrders(10, pageIndex, setOrdersResponse);

    setPageIndex(pageIndex+1);
  }

  useEffect(() => {
    getOrdersResponse();
  }, []);


  useEffect(() => {
    if(OrdersResponse?.length < 10)
    {
      setShouldShowMoreButton(false);
    }

    setAllOrders([...(allOrders??[]), ...OrdersResponse??[]])
  }, [OrdersResponse])

  const detailsPageButtonFunction = (e) => {
    window.currentOrder = e;

    window.setGoBackFunction(() => {
        window.setmainActiveEmployeePage("Tabs");
      });

    window.setmainActiveEmployeePage("OrderPage");
  }

  return (
                <>
                {allOrders?.length > 0 ? 
                    <table class="table align-middle mb-0 bg-white">
                    <thead class="bg-light">
                    <tr>
                        <th>Id</th>
                        <th>Service Type</th>
                        <th>Vehicle Name</th>
                        <th>Status</th>
                        <th>Worker</th>
                        <th> </th>
                    </tr>
                    </thead>
                        <tbody>
                            {
                            allOrders.map(e => {
                                return (
                                    <tr>
                                    <td>{e.id}</td>
                                    <td>{e.orderType}</td>
                                    <td>{e.vehicle.name}</td>
                                    <td>
                                        <span class="badge badge-success rounded-pill d-inline">{e.status}</span>
                                    </td>
                                    <td>
                                        {
                                            e.worker != null ? 
                                            <>
                                            <p class="fw-normal mb-1">{e.worker.name} {e.worker.surname}</p>
                                            <p class="text-muted mb-0">Worker</p>
                                            </> : "waiting"
                                        }
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => {detailsPageButtonFunction(e)}} class="btn btn-link btn-sm btn-rounded">Details</button>
                                    </td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                    : 
                    <>
                    <p>
                    </p>
                    <p></p>
                    <div style={{display: "flex", margin:"150px", justifyContent: "center"}}>
                        <p>There is no order yet.</p>
                    </div>
                    </>
                }
            <p></p>
            {
                shouldShowMoreButton &&
                <div style={{display: "flex", justifyContent: "center"}}>
                            <MDBBtn onClick={getOrdersResponse}>Load More</MDBBtn>
                </div>
            }
          
                <p></p>
                <p></p>
            </>
) 

}


export default OrderList;