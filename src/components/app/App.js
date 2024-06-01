import './App.css';
import Login from '../loginComponent'
import MainPage from '../mainPageComponent'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

import * as sessionApi from "../../api/session/index"

function App() {

  const [userInfo, setUserInfo] = useState(undefined);

  window.userInfo = userInfo;
  window.setUserInfo = setUserInfo;

  useEffect(() => {
    //setUserInfo(Cookies.get("userInfo"));
    sessionApi.getCurrentUser(setUserInfo)
  }, []);

  return (
    userInfo == undefined ? <Login></Login> : (
      <MainPage></MainPage>
    )
  );
}

export default App;
