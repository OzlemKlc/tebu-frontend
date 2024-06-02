import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import "./index.css"
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

import { getStatistics } from "../../../api/admin/index"

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  


function Statistics() {
    const [stats, setStats] = useState(null);


    useEffect(() => {
      getStatistics(setStats);
    }, [])


    return stats == null ? null : (
         <>

              <p></p>
              <div style={{display: "flex", justifyContent: "center"}}>
                    <MDBBtnGroup toolbar role='toolbar' aria-label='Toolbar with button groups'>
                      <MDBBtnGroup className='me-5' aria-label='First Group'>
                        <MDBBtn>Daily Successful Order Count: {stats.todaySuccessfulOrders}</MDBBtn>
                      </MDBBtnGroup>
                      <MDBBtnGroup className='me-5' aria-label='Second Group'>
                        <MDBBtn>Weekly Successful Order Count: {stats.weeklySuccessfulOrders}</MDBBtn>
                      </MDBBtnGroup>
                      <MDBBtnGroup className='me-5' aria-label='Third Group'>
                        <MDBBtn>Monthly Order Count: {stats.monthlySuccessfulOrders}</MDBBtn>
                      </MDBBtnGroup>
                    </MDBBtnGroup>
              </div>
              <p></p>
              <p></p>
              <p></p>
              <div style={{display: "flex", justifyContent: "center"}}>
                    <MDBBtnGroup toolbar role='toolbar' aria-label='Toolbar with button groups'>
                      <MDBBtnGroup aria-label='First Group'>
                        <MDBBtn>Average Delivery In Hours: {stats.avarageDeliveryInHours}</MDBBtn>
                      </MDBBtnGroup>
                    </MDBBtnGroup>
              </div>
              <p></p>
                {stats.brandCounts.length > 0 && <Chart
                chartType="PieChart"
                data={stats.brandCounts.map((e) => {
                  return [e.name, e.count]
                })}
                options={{
                    title: "Brand Statistics",
                  }}
                width={"100%"}
                height={"400px"}
                />}
                {stats.modelYearCounts.length > 0 && <Chart
                chartType="PieChart"
                data={stats.modelYearCounts.map((e) => {
                  return [e.name, e.count]
                })}
                options={{
                    title: "Model Year Statistics",
                  }}
                width={"100%"}
                height={"400px"}
                />}
        </>
    ) 

}


export default Statistics;