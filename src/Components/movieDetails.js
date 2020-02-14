import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getTheater } from "../REDUX/Actions";
class movieDetails extends React.Component {
  componentDidMount() {
    console.log("inside component did mount of movieDetails");
    if (this.props.fetchedMovie.length > 1) {
      console.log("inside movie booking page component did mount");
      const movieName = this.props.fetchedMovie[0].name;
      const location = "bangalore";
      this.props.getTheater(movieName, location);
    }
  }
  render() {
    console.log("inside movieDetails ", this.props.fetchedMovie);
    if (this.props.fetchedMovie[0]) {
      let language = " ";
      let formate = "";
      this.props.fetchedMovie.forEach(i => {
        language = " " + i.language;
        formate = "" + i.type;
      });
      return (
        <Container>
          <Row>
            <Col md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={this.props.fetchedMovie[0].thumbnail}
                  alt={this.props.fetchedMovie[0].name}
                />
                <Card.Body>
                  <Card.Title>{this.props.fetchedMovie[0].name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    subtitle {this.props.fetchedMovie[0].name}
                  </Card.Subtitle>
                  <Card.Text>
                    MovieName:{this.props.fetchedMovie[0].name} <br />
                    Language:{language}
                    <br />
                    Format:{formate}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* here if elese logic will embed */}
            <Col md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Booking Details</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Select your theater
                  </Card.Subtitle>
                  <Card.Text>
                    {/* dynamic values of theater where movie is a and location is bangalore */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
    getTheater: (movieName, location) => {
      dispatch(getTheater(movieName, location));
    }
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(movieDetails);
