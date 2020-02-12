import axios from "axios";
const Logout = () => {
  //console.log('doing logout')
  return dispatch => {
    //console.log('doing logout before dipatch()');
    dispatch({ type: "LOGOUT", payload: "" });
  };
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

export { LoginUser, Logout };
