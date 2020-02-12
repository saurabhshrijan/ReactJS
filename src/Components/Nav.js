import React from "react";
import { connect } from "react-redux";
import { Logout } from "../REDUX/Actions";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Redirect } from "react-router";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: ""
    };
    this.onLogOut = this.onLogOut.bind(this);
    this.handleOnDropdown = this.handleOnDropdown.bind(this);
  }
  onLogOut = () => {
    this.props.LogOut();
  };

  handleOnDropdown(value) {
    console.log("inside");
    console.log("inhandleondropdown", this.state);
    this.setState({ stateName: value });
    console.log("after", this.state);
  }
  render() {
    // console.log('the props in the nav are ',this.props);
    //console.log("nav loggging the name ", this.props.logInUser);
    //const name=this.props.logInUser;
    let UserName = this.props.logInUser;
    if (this.props.logInUser.length > 1) {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={"/"}>
              Welcome {UserName}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href={"/"}>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/"}>
                    Link
                  </a>
                </li>
                <li>
                  <DropdownButton
                    id="dropdown-item-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item
                      as="button"
                      onClick={() => this.handleOnDropdown("bangalore")}
                    >
                      Bangalore
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      onClick={() => this.handleOnDropdown("pune")}
                    >
                      Pune
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      onClick={() => this.handleOnDropdown("hyderabad")}
                    >
                      Hyderabad
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
                <li className="nav-item">
                  <button className="btn btn-primamry" onClick={this.onLogOut}>
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <>
          <Redirect to="/" />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href={"/"}>
              Login
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href={"/"}>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={"/"}>
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
    }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    LogOut: () => {
      dispatch(Logout());
    }
  };
};
const mapStateToProps = state => {
  return { logInUser: state.user.Name };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
