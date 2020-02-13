const initialState = {
  Name: {},
  movies: []
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      //console.log("returning from reducer", { ...state, Name: action.payload });
      return { ...state, Name: action.payload };
    case "LOGOUT":
      return { ...state, Name: action.payload };

    case "GET_MOVIES":
      const x = { ...state, movies: action.payload };
      console.log("in reducer getmovie state become ", x);
      return { ...state, movies: action.payload };

    case "BOOK_MOVIE":
      const z = state.movies.find(value => value === action.payload);
      return { ...state, movies: z };

    default:
      return state;
  }
};
export default getUserReducer;
