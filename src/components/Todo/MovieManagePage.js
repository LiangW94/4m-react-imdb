import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as manageMoviesActions from '../../actions/manageMoviesActions';
import LocalMovieList from './LocalMovieList';
import Header from '../Common/Header/Header';
import Footer from '../Common/Footer/Footer';

class MovieManagePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            localMovies: Object.assign({}, props.localMovies),
        };

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        // console.log(e)
        // let a = this.props.localMovies.splice(e, 1);
        // console.log(a)
        // this.setState({localMovies: a})
        this.props.actions.reomveMovie(this.state, e);
    }

    render() {
        return (
            <div className="MovieManagePage">
                <Header />
                <LocalMovieList
                    localMovies={this.props.localMovies}
                    addMovie={this.addMovie}
                    handleRemove={this.handleRemove}
                />
                <Footer url='/' footerText='Back Home' />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        localMovies: state.localMovies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(manageMoviesActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieManagePage);
