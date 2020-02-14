import React from "react";
import { Redirect } from "react-router";

import { connect } from "react-redux";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { bookMovie } from "../REDUX/Actions";
class MovieList extends React.Component {
  constructor() {
    super();
    this.handleBooking = this.handleBooking.bind(this);
  }
  handleBooking(movieName) {
    console.log("cp");
    this.props.bookMovie(movieName);
  }
  componentDidMount() {
    console.log("inside component did mount");

    console.log(this.props.movieListArray);
  }
  render() {
    if (this.props.fetchedMovie.length) {
      console.log("fetched movie", this.props.fetchedMovie);
      return <Redirect to="/book" />;
    }
    console.log("render method of movieList");
    console.log("looging all props", this.props);
    // console.log(this.props.movieListArray);

    const movies = this.props.movieListArray.map((values, index) => {
      let lang = "";
      values.language.forEach(item => {
        lang = lang + " " + item;
      });
      return (
        <Col md="3" key={Math.random()}>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={values.thumbnail} alt={values.name} />
            <Card.Body>
              <Card.Title>{values.name}</Card.Title>
              <Card.Text>
                <p>{lang}</p>
                <p>Rating: {values.rating}</p>
              </Card.Text>
              <Card.Text>{movies}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  this.handleBooking(values.name);
                }}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <React.Fragment>
        <Container>
          <Row>{movies}</Row>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = state => {
  return {
    movieListArray: state.user.movies,
    fetchedMovie: state.user.selectedMovie
  };
};
const mapDispatchToProps = dispatch => {
  return {
    bookMovie: movieName => {
      dispatch(bookMovie(movieName));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(MovieList);
