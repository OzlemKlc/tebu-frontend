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

    window.stats = stats;

    useEffect(() => {
      getStatistics(setStats);

    }, [])

    const [brandStats, setBrandStats] = useState([]);
    const [yearStats, setYearStats] = useState([]);

    useEffect(() => {
      if(stats == null)
        return

      let bs = stats.brandCounts.map((e) => {
        return [e.name, e.count]
      });

      bs = [["Brand", "Amount"], ...bs];

      let ys = stats.modelYearCounts.map((e) => {
        return [e.name, e.count]
      });

      ys = [["Year", "Amount"], ...ys]


      setBrandStats(bs)
      setYearStats(ys)


    }, [stats])


    return stats == null ? null : (
         <>

              <p></p>
                <div style={{display: "flex", justifyContent: "center"}}>
                          <MDBBtnGroup toolbar role='toolbar' aria-label='Toolbar with button groups'>
                            <MDBBtnGroup aria-label='First Group'>
                              <MDBBtn>Succesful Order Counts</MDBBtn>
                            </MDBBtnGroup>
                          </MDBBtnGroup>
                    </div>
                <p></p>
                <div style={{display: "flex", justifyContent: "center"}}>
                    
                    <MDBBtnGroup toolbar role='toolbar' aria-label='Toolbar with button groups'>
                      <MDBBtnGroup className='me-1' aria-label='First Group'>
                        <MDBBtn>Daily: {stats.todaySuccessfulOrders}</MDBBtn>
                      </MDBBtnGroup>
                      <MDBBtnGroup className='me-1' aria-label='Second Group'>
                        <MDBBtn>Weekly: {stats.weeklySuccessfulOrders}</MDBBtn>
                      </MDBBtnGroup>
                      <MDBBtnGroup className='me-1' aria-label='Third Group'>
                        <MDBBtn>Monthly: {stats.monthlySuccessfulOrders}</MDBBtn>
                      </MDBBtnGroup>
                    </MDBBtnGroup>
              </div>
              <p></p>
              <p></p>
              <div style={{display: "flex", marginTop: "50px", justifyContent: "center"}}>
                    <MDBBtnGroup toolbar role='toolbar' aria-label='Toolbar with button groups'>
                      <MDBBtnGroup aria-label='First Group'>
                        <MDBBtn>Average Delivery In Hours: {stats.avarageDeliveryInHours.toFixed(2)}</MDBBtn>
                      </MDBBtnGroup>
                    </MDBBtnGroup>
              </div>
              <p></p>
              <div  style={{marginRight:"-250px"}}>
                {<Chart
                  chartType="PieChart"
                  data={brandStats}
                  options={{
                      title: "Brand Statistics",
                      is3D: true,
                      backgroundColor: "transparent"
                    }}
                  width={"100%"}
                  height={"400px"}
                  />}
                  { <Chart
                  chartType="PieChart"
                  data={yearStats}
                  options={{
                      title: "Brand Statistics",
                      is3D: true,
                      backgroundColor: "transparent"
                    }}
                  width={"100%"}
                  height={"400px"}
                  />}
              </div>
        </>
    ) 

}


export default Statistics;