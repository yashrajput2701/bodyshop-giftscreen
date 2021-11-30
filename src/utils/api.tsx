import Utils from "../utils";

/**
 *
 * @param endPoint api end point
 * @param params api url parameter
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const getApiCall = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  // console.log({ endPoint, params });
  Utils.constants.axios
    .get(Utils.constants.apiUrl)
    .then((response: any) => {
      console.log(response);
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        console.log("response: ", error.response);
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback function for handle error response
 */
const postApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  // console.log({ endPoint, params, successCallback });
  Utils.constants.axios
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        console.log("response: ", error.response);
        errorCallback(error.response);
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
export default {
  getApiCall,
  postApiCall,
};
