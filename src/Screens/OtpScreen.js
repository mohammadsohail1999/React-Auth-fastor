import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector,useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {Login} from '../actions/userActions';

const OtpSceen = () => {
  const history = useHistory();

  const [OTP, setotp] = useState(null);
  

  const dispatch = useDispatch();
  const { initials,userInfo,error} = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!initials) {
      history.push("/");
    } else {
      setotp({
        ...initials,
      });
    }
      
    if(userInfo){
      history.push('/')

    }
    if(error){
      alert('OTP is incorrect')
    }


  }, [history, initials,error,userInfo]);

  const onChangeHandler = (obj) => {
    setotp({ ...OTP, ...obj });
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
      <h1 style={{ marginTop: "-10%" }}>Enter OTP</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(Login(OTP));
             


        }}
        className="p-4"
      >
        {initials ? <h1>number : {initials.phone}</h1> : null}
        
        <Form.Control
          onChange={(e) => {
            onChangeHandler({ otp: e.target.value });
          }}
          as="input"
          type="number"
          className="mb-3 mt-5"
          id="inlineFormInputName2"
          placeholder="Enter The OTP."
          required
        />

        <Button type="submit" className="my-1">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default OtpSceen;
