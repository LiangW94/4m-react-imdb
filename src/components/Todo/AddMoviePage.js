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
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let localMovies = this.state.localMovies;
        localMovies[field] = event.target.value;
        return this.setState({ localMovies: localMovies });
    }

    saveCourse(event) {
        event.preventDefault();
        
        this.props.actions.createMovie(this.state.localMovies);

        this.props.history.push('/Movielist');
    }

    render() {
        return (
            <div className="LocalMoviePage">
                <Header />
                <LocalMovieForm
                    movie={this.state.localMovies}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                />
                <Footer url='/Movielist' footerText='Back to Movie List' />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    let localMovies = { Title: '', Year: '', Director: '', Country: '' };
    return {
        localMovies: localMovies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(manageMoviesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalMoviePage);
