export const OTPReducer = (state = { loading: true, otp: null }, action) => {
  switch (action.type) {
    case "OTP_SUCCESS":
      return { ...action.payload };

    case "OTP_FAIL":
      return { ...action.payload };

      case "USER_LOGOUT" :

      return {loading:false,otp:null}

    default:
      return state;
  }
};

export const userLoginReducer = (
  state = { loading: true, initials: null, userInfo: null },
  action
) => {
  switch (action.type) {
    case "USER_OTP_SUCCESS":
      return { ...state, ...action.payload };

    case "USER_SUCCESS":
      return { initials: state.initials, ...action.payload };

    case "USER_FAIL":
      return { initials: state.initials, ...action.payload };

    case "USER_LOGOUT":
      return { initials: null, userInfo: null };

    default:
      return state;
  }
};
