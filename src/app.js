import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';

const socket = io.connect(process.env.SOCKET_URL);
const store = configureStore();
registerServiceWorker()

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
    <AppRouter />
   </MuiThemeProvider>
  </Provider>, document.getElementById('app'));
