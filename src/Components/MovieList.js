import React from "react";
// import {Redirect} from 'react-router';
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
// import {bookMovie} from '../REDUX/Actions';
class MovieList extends React.Component {
  constructor() {
    super();
    this.handleBooking = this.handleBooking.bind(this);
  }
  handleBooking(movieName) {
    console.log("cp");

    this.props.book(movieName);
  }
  componentDidMount() {
    console.log("inside component did mount");

    console.log(this.props.movieListArray);
  }
  render() {
    console.log("render method");
    console.log(this.props.movieListArray);
    const movies = this.props.movieListArray.map(values => {
      return (
        <div key={Math.random()}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={values.thumbanail} alt={values.name} />
            <Card.Body>
              <Card.Title>{values.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
        </div>
      );
    });
    return <>{movies}</>;
  }
}
const mapStatetoProps = state => {
  return {
    movieListArray: state.user.movies
  };
};
// const mapDispatchToProps=(dispatch)=>{
//   return {
//     book:(movieName)=>{
//       dispatch(bookMovie(movieName))
//     }
//   }
//};

export default connect(
  mapStatetoProps,
  null
)(MovieList);
