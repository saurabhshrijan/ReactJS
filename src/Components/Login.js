import React from "react";
import './Login.css';
class Login extends React.Component {
  constructor() {
    super();
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
  }
  render() {
    return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Sign In</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="email" 
                id="inputEmail" 
                className="form-control" 
                placeholder="Email address" 
                required autoFocus/>
                <label htmlFor="inputEmail">Email address</label>
              </div>

              <div className="form-label-group">
                <input type="password" 
                id="inputPassword" 
                className="form-control" 
                placeholder="Password" required/>
                <label htmlFor="inputPassword">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" 
                className="custom-control-input" 
                id="customCheck1"/>
                <label className="custom-control-label" 
                htmlFor="customCheck1">Remember password</label>
              </div>
              <button 
              className="btn btn-lg btn-primary btn-block text-uppercase" 
              type="submit">Sign in</button>
              <hr className="my-4"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
export default Login;
