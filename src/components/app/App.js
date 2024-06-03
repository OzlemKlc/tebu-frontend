import './App.css';
import Login from '../loginComponent'
import MainPage from '../mainPageComponent'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import {PacmanLoader, ClimbingBoxLoader, HashLoader}  from "react-spinners";
import Overlay from '@uiw/react-overlay';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
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

  window.alertError = (messages) => {
    messages.forEach(message => {
      Store.addNotification({
        title: message,
        message: "",
        type: "default",
        insert: "top",
        container: "bottom-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3500,
          onScreen: true
        }
      });
    });

    
  }

  return (
    <>
    <ReactNotifications />
    {userInfo == undefined ? <Login></Login> : (
      <MainPage></MainPage>
    )}
    <Overlay key={loading}
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
