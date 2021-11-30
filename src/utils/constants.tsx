import axios from "axios";

const $axios = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    deviceid: "6d988267-503d-49aa-9eca-b0343b49494b",
    platform: "web",
    offset: "-330",
    language: "en",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI2MThhMDg0ZTc0MWYwMTAwMDhlNGU5YTQiLCJwbGF0Zm9ybSI6IndlYiIsInNhbHQiOiJlMDQ3ZGE4MmU1MDhhZmQ4YTYzNDFkNzZhZWNjZTA0OSIsImlhdCI6MTYzNjQzNjA0NywiZXhwIjoxNjUxOTg4MDQ3fQ.Emx_h3VHE3mnV4QtTxUFza46MjVxq0PVotIkCDO6exM",
    method: "GET",
    path: "/user-service/api/v1/users/page/giftcard",
    scheme: "https",
  },
});

const api_header_code = {
  alreadyEnabled2fa: 2059,
  secondTimeGoogleUser: 2054,
  alreadyWithManual: 2061,
  phoneVerification: 2071,
  providePhoneNumber: 2072,
  redirect3DSecure: 2073,
  paymentCancelledByUser: 2076,
  authSet: 5041,
  DeclinedST: 5044,
};
const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 440,
  validationError: 400,
  emailNotVerified: 403,
  maintenanceMode: 502,
};

const api_success_code = {
  postSuccess: 201,
  success: 200,
};

const response_alert = {
  INFORMATION_ALERT_WITHOUT_ACTION: 1,
  ALERT_WITH_ACTION: 2,
  ALERT_WITHOUT_ACTION: 3,
  CONNECTION_ERROR: 4,
  CONTACT_SUPPORT: 5,
};

const constant = {
  axios: $axios,
  apiUrl: "",
  api_error_code,
  api_header_code,
  api_success_code,
  response_alert,
};

export default constant;
