const initialState = {
  Name: {},
  movies: [],
  selectedMovie: []
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
      const z = [];
      state.movies.forEach(values => {
        if (values.name === action.payload) {
          z.push(values);
        }
      });
      console.log("intial state before change", state);
      console.log("in reducer bookmovie", z);
      return { ...state, selectedMovie: z };

    default:
      return state;
  }
};
export default getUserReducer;
