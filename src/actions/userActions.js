import axios from "axios";

export const baseURL = "https://staging.fastor.in:8090/v1/";

export const getOTP = (obj) => async (dispatch) => {
  const { data } = await axios.post(`${baseURL}pwa/user/register`, obj);

  localStorage.setItem("phone", JSON.stringify(obj.data));

  if (data.error_message) {
    dispatch({
      type: "OTP_FAIL",
      payload: { loading: false, error: data.error_message },
    });
  } else {
    dispatch({ type: "OTP_SUCCESS", payload: { loading: false, Otp: data } });

    if (data.status === "Success") {
      dispatch({ type: "USER_OTP_SUCCESS", payload: { initials: obj } });
    }
  }
};

export const Login = (obj) => async (dispatch) => {
  const { data } = await axios.post(`${baseURL}pwa/user/login`, obj);

  localStorage.setItem("userInfo", JSON.stringify(data.data));

  if (data.error_message) {
    dispatch({
      type: "USER_FAIL",
      payload: { loading: false, error: data.error_message },
    });
  } else {
    dispatch({
      type: "USER_SUCCESS",
      payload: { loading: false, userInfo: data.data },
    });
  }
};

export const LogOut = () => {
  localStorage.removeItem("userInfo");

  return {
    type: "USER_LOGOUT",
  };
};
