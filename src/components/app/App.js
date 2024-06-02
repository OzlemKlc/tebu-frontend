import './App.css';
import Login from '../loginComponent'
import MainPage from '../mainPageComponent'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import {PacmanLoader, ClimbingBoxLoader, HashLoader}  from "react-spinners";
import Overlay from '@uiw/react-overlay';

import * as sessionApi from "../../api/session/index"


const overrideCss = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {

  const [userInfo, setUserInfo] = useState(undefined);

  window.userInfo = userInfo;
  window.setUserInfo = setUserInfo;

  useEffect(() => {
    //setUserInfo(Cookies.get("userInfo"));
    sessionApi.getCurrentUser(setUserInfo)
  }, []);

  const [loading, setLoading] = useState(false);

  const [loaderCount, setLoaderCount] = useState(0);

  window.setLoading = (e) => {
    setLoading(e);
    if(e == false)
      setLoaderCount(loaderCount+1);
  }

  return (
    <>
    {userInfo == undefined ? <Login></Login> : (
      <MainPage></MainPage>
    )}
    <Overlay
        hasBackdrop={true}
        isOpen={loading}
        onClose={() => false}
        maskClosable={false}>
        <div >
          {
            loaderCount % 3 == 0 ?
            <PacmanLoader  
              loading={loading}
              
              cssOverride={overrideCss}
              size={45}
              color='rgb(60, 115, 206)'
              aria-label="Loading Spinner"
              data-testid="loader"
            /> :
            loaderCount % 3 == 1 ?
            <ClimbingBoxLoader  
              loading={loading}
              
              cssOverride={overrideCss}
              size={35}
              color='rgb(60, 115, 206)'
              aria-label="Loading Spinner"
              data-testid="loader"
            /> :
            <HashLoader  
              loading={loading}
              
              cssOverride={overrideCss}
              size={125}
              color='rgb(60, 115, 206)'
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          }

          
        </div>
    </Overlay>
    </>
  );
}

export default App;
