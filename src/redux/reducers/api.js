const initialState = {
  isLoading: false,
  error: null,
  data: []
};

function api(state = initialState, action) {
  switch (action.type) {
    case "GET_DATA_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        isLoading: true,
        data: action.result
      };
    case "GET_DATA_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default api;
