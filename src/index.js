import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/bootstrap.min.css';
import App from './components/App';
import * as serviceWorker from './util/serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import TodoPage from './components/Todo/TodoPage';

const store = configureStore();
// store.dispatch(loadMovie());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/Movielist" component={TodoPage} />
            </Switch>

        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
