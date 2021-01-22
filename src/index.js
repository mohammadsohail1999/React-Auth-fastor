import React from "react";

import ReactDOM from "react-dom";
import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";

import {Provider} from 'react-redux';
import { createStore } from "redux";
import Reducer from './Store';
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';



const userDetails = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;


const initialState = {
    
    userLogin: {initials:null,userInfo: userDetails}

}


ReactDOM.render(<Provider store={createStore(Reducer,initialState,composeWithDevTools(applyMiddleware(thunk)))}><App /></Provider>, document.querySelector("#root"));
