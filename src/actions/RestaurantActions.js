import axios from "axios"


import {baseURL} from './userActions';


export const fetchRestaurants = ()=> async(dispatch,getState)=>{


    const {userLogin} =  getState();

    console.log(userLogin);
  //  console.log(state);


  
   const {data} = await axios.get(`${baseURL}m/restaurant?city_id=118&&`,{
    
    headers:{
        Authorization: `Bearer ${userLogin.userInfo.token}`
    }


  })

   dispatch({type:'FETCH_SUCCESS',payload:{places:data}})   

  


  

      
   







} 