import React from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { getTheater } from "../REDUX/Actions";
class movieDetails extends React.Component {
  componentDidMount() {
    const movieName = this.props.fetchedMovie[0].name;
    this.props.getTheater(movieName);
  }
  render() {
    console.log("inside movieDetails ", this.props.fetchedMovie);
    if (this.props.fetchedMovie[0]) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{this.props.fetchedMovie[0].name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    subtitle {this.props.fetchedMovie[0].name}
                  </Card.Subtitle>
                  <Card.Text>
                    MovieName:{this.props.fetchedMovie[0].name} <br />
                    Language:{this.props.fetchedMovie[0].language}
                    <br />
                    Format:{this.props.fetchedMovie[0].type}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Booking Details</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Select your theater
                  </Card.Subtitle>
                  <Card.Text />
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }
}
const mapStatetoProps = state => {
  return {
    fetchedMovie: state.user.selectedMovie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTheater: movieName => {
      dispatch(getTheater(movieName));
    }
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(movieDetails);
