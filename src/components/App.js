import React, { Component } from 'react';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import MovieList from './MovieList/MovieList';
// import TodoPage from './Todo/TodoPage'
// import { Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movieActions'

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchTitle: ''
    };

    this.onSearchClick = this.onSearchClick.bind(this)
    this.onLuckyClick = this.onLuckyClick.bind(this)
    this.onSearchValueChange = this.onSearchValueChange.bind(this)
  }

  onSearchClick(){
    this.props.actions.searchMovie(this.state.searchTitle)
  }

  onLuckyClick(){
    this.props.actions.luckyMovie()
  }

  onSearchValueChange(e){
    e.preventDefault();
    this.setState({
      searchTitle: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
        onSearchClick={this.onSearchClick}
        onLuckyClick={this.onLuckyClick}
        onSearchValueChange={this.onSearchValueChange}
        />
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
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
