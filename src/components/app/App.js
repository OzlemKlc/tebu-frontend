import './App.css';
import Login from '../loginComponent'
import MainPage from '../mainPageComponent'
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

function App() {

  let [userInfo, setUserInfo] = useState(undefined);

  window.userInfo = userInfo;
  window.setUserInfo = setUserInfo;

  useEffect(() => {
    setUserInfo(Cookies.get("userInfo"));

    setTimeout(() => {setUserInfo("")}, 10000)
  }, []);

  return (
    userInfo == undefined ? <Login></Login> : <MainPage></MainPage>
  );
}

export default App;
