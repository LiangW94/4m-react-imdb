import React, { Component } from 'react';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import MovieList from './MovieList/MovieList';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from '../actions/movieActions';
import SearchMovie from './MovieList/SearchMovie';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchTitle: '',
      searchTitleValid: true
    };

    this.onSearchClick = this.onSearchClick.bind(this)
    this.onLuckyClick = this.onLuckyClick.bind(this)
    this.onSearchValueChange = this.onSearchValueChange.bind(this)
    this.onEnterPress = this.onEnterPress.bind(this)
  }

  onSearchClick() {
    if (this.state.searchTitle === '') {
      this.setState({ searchTitleValid: false })
    }
    else {
      this.setState({ searchTitleValid: true })
      this.props.actions.searchMovie(this.state.searchTitle);
    }
  }

  onEnterPress(e) {
    if (e.key === 'Enter') {
      if (this.state.searchTitle === '') {
        this.setState({ searchTitleValid: false })
      }
      else {
        this.setState({ searchTitleValid: true })
        e.preventDefault();
        this.props.actions.searchMovie(this.state.searchTitle)
      }
    }
  }

  onLuckyClick() {
    this.props.actions.luckyMovie()
  }

  onSearchValueChange(e) {
    e.preventDefault();
    this.setState({
      searchTitle: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchMovie
          searchTitleValid={this.state.searchTitleValid}
          onSearchClick={this.onSearchClick}
          onLuckyClick={this.onLuckyClick}
          onSearchValueChange={this.onSearchValueChange}
          onEnterPress={this.onEnterPress}
        />
        <MovieList movies={this.props.movies} loading={this.props.loading} />
        <Footer url='Movielist' footerText='Movie List' />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies,
    loading: state.ajaxStatus > 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
