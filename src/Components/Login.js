import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { LoginUser, getMovies } from "../REDUX/Actions";
//import axios from 'axios';
import { Redirect } from "react-router";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleOnSubmit(event) {
    event.preventDefault();
    const user = {
      userName: this.state.userName,
      password: this.state.password
    };
    // console.log("cp", user);

    this.props.LoginUser(user); //async call
  }
  render() {
    console.log("inside loginjs render", this.props);
    if (this.props.user.length > 1) {
      this.props.getMovies();

      return <Redirect to="/movieList" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin" onSubmit={this.handleOnSubmit}>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="userName"
                      className="form-control"
                      placeholder="UserName"
                      onChange={this.handleOnChange}
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Userame</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputPassword"
                      name="password"
                      onChange={this.handleOnChange}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user.Name };
};

const mapDispacthToProps = dispatch => {
  return {
    LoginUser: user => dispatch(LoginUser(user)),
    getMovies: () => {
      dispatch(getMovies());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Login);
