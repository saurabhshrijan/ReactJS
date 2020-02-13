import axios from "axios";

const Logout = () => {
  //console.log('doing logout')
  return dispatch => {
    //console.log('doing logout before dipatch()');
    dispatch({ type: "LOGOUT", payload: "" });
  };
};
const getMovies = () => {
  console.log("inside getMovies...");
  return dispatch => {
    console.log("getting movies...");
    axios
      .get("./movieList.json")
      .then(res => {
        console.log(res);
        dispatch({ type: "GET_MOVIES", payload: res.data });
      })
      .catch(err => console.log(err));
  };
};
const selectedMovie = value => {
  console.log("inside selectedMovie function....");
  return dispatch => {
    console.log("fetching movie details....");
    console.log("fetching movie of", value);
    axios
      .get("./movieList.json", {
        params: {
          name: value
        }
      })
      .then(res => {
        console.log(res.data);
        console.log(res.data[0].name);
      })
      .catch(err => {
        console.log("error is ", err);
      });
  };
};
const bookMovie = movieName => {
  console.log("inside bookMovie", movieName);
  return dispatch => {
    console.log("opening....");
    dispatch({ type: "BOOK_MOVIE", payload: movieName });
  };
};
const getTheater = () => {
  console.log("inside getTheater");
  return dispatch => {};
};
const LoginUser = user => {
  return dispatch => {
    console.log("fetching.....");
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        params: { email: user.userName }
      })
      .then(res => {
        console.log(res);
        dispatch({ type: "GET_USER", payload: res.data[0].name });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export { LoginUser, Logout, selectedMovie, getMovies, bookMovie, getTheater };
