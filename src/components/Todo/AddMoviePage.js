import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as manageMoviesActions from '../../actions/manageMoviesActions';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';
import LocalMovieForm from './LocalMovieForm';

class LocalMoviePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            localMovies: Object.assign({}, props.localMovies),
            update: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.submitMovie = this.submitMovie.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }
    
    updateCourseState(event) {
        const field = event.target.name;
        let localMovies = this.state.localMovies;
        localMovies[field] = event.target.value;

        return this.setState({ localMovies: localMovies });
    }

    submitMovie(event) {
        event.preventDefault();

        this.props.actions.createMovie(this.state.localMovies);

        this.props.history.push('/Movielist');
    }

    updateMovie(event) {
        event.preventDefault();

        this.props.actions.updateMovie(this.state.localMovies, this.props.moiveId);

        this.props.history.push('/Movielist');
    }

    render() {
        return (
            <div className="LocalMoviePage">
                <Header />
                <LocalMovieForm
                    movie={this.state.localMovies}
                    onChange={this.updateCourseState}
                    onSave={this.props.update?this.updateMovie:this.submitMovie}
                    formTitle={this.props.update?'Update a movie':'Add a Movie'}
                    buttonValue={this.props.update?'Update':'Submit'}
                />

                <Footer url='/Movielist' footerText='Back to Movie List' />
            </div>
        );
    }
}

function getMovieById(movies, id){
    const movie = movies.filter(movies => movies.id == id);
    if (movie.length) return movie[0].localMovies; 
    return null;
}

function mapStateToProps(state, ownProps) {
    let localMovies = { Title: '', Year: '', Director: '', Country: '' };
    let moiveId = ownProps.match.params.id;
    let update = false;

    if (moiveId && state.localMovies.length > 0) {
        localMovies = getMovieById(state.localMovies, moiveId);
        update = true
    }
    return {
        localMovies: localMovies,
        update: update,
        moiveId: moiveId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(manageMoviesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalMoviePage);
