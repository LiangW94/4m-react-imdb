import React, { Component } from 'react';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import MovieList from './MovieList/MovieList';
// import TodoPage from './Todo/TodoPage'
// import { Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  // constructor(props, context) {
  //   super(props, context);

  //   // this.state = {
  //   //   movies: Object.assign({}, props.movies)
  //   // };
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={this.props.movies} />
        {/* <Route path="/Todo" component={TodoPage} /> */}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
