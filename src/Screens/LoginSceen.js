import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOTP } from "../actions/userActions";
import {useHistory} from 'react-router-dom';

const LoginSceen = () => {

  const [number, setnumber] = useState(null);

  const dispatch = useDispatch();

  const { Otp, error } = useSelector((state) => state.OTP);
 
  const {userInfo} = useSelector(state=>state.userLogin);
  

  const history = useHistory();

  useEffect(()=>{

    if(userInfo){
       
      history.push('/')
      dispatch()
    
    }

     if(Otp){
        history.push('/otp');
      }
      if(error){
        alert(error);
      }


  },[dispatch,Otp,error,history,userInfo])




  const onChangeHandler = (obj) => {
    setnumber({ ...number, ...obj });
  };





  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(getOTP(number)); 
    
    
  };

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginTop: "-10%" }}>Rigister the number.</h1>
      <Form onSubmit={onSubmitHandler} className="p-4">
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Country Select</Form.Label>
          <Form.Control
            onClick={(e) => {
              onChangeHandler({ dial_code: e.target.value });
            }}
            as="select"
            custom
          >
            <option  value="Select region">
               Select Region
            </option>
            <option  value="+91">
              +91 - India
            </option>
          </Form.Control>
        </Form.Group>

        <Form.Control
          onChange={(e) => {
            onChangeHandler({ phone: e.target.value });
          }}
          as="input"
          className="mb-3"
          id="inlineFormInputName2"
          placeholder="Enter The number."
          type="number"
          required
        />

        <Button type="submit" className="my-1">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginSceen;
