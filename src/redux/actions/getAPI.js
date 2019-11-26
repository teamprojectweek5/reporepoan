import axios from "axios";

function getDataBegin() {
  return {
    type: "GET_DATA_BEGIN"
  };
}

function getDataSuccess(result) {
  return {
    type: "GET_DATA_SUCCESS",
    result
  };
}

function getDataFailed(error) {
  return {
    type: "GET_DATA_FAILED",
    error
  };
}

export function getData() {
  return function(dispatch) {
    dispatch(getDataBegin());

    axios.get();
  };
}
