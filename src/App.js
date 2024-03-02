// import './App.css';
import React, { useEffect } from "react";
import Routing from './Routes/routing';
import { Provider } from 'react-redux';
// import store from './store/index';
// import {getToken} from "../src/Token/index";



function App() {

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Your code to run every one minute
  //     const checkTokenValidity = async () => {
  //       try {
  //         const tokenValidationResult = await getToken();
  //         // console.log("token here....", tokenValidationResult)
  //       } catch (error) {
  //         console.error("Error checking token validity:", error);
  //       }
  //     };
  //     checkTokenValidity();
  //   }, 2000); 
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  return (
    <>
      {/* <Provider store={store}> */}
            <Routing />
      {/* </Provider> */}
    </>
  );
}

export default App;
