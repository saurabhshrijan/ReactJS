const initialState = {
  Name: {}
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      console.log("returning from reducer", { user: action.payload });
      return { ...state, Name: action.payload };
    case "LOGOUT":
      return { ...state, Name: action.payload };
    default:
      return state;
  }
};
export default getUserReducer;
