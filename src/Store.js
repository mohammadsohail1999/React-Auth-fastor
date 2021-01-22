

import {combineReducers} from 'redux';


import {userLoginReducer,OTPReducer} from './reducers/userReducer';

import {placesReducer} from './reducers/places';


const Reducer = combineReducers({

    OTP: OTPReducer,
   userLogin: userLoginReducer,
   places: placesReducer





})


export default Reducer;
