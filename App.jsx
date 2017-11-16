import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {MuiThemeProvider} from 'material-ui';
import {BrowserRouter} from 'react-router-dom';
// import {Routes} from './Routes/routes';
import { Routes } from './routes.jsx';
// import Navigation from './Header/Navigation';

class VibenomicsApp extends Component {
  render() {
    const {isAuthenticated, dispatch} = this.props;
    
    console.log('authenticated', isAuthenticated)
    console.log('react-router-dom now kicks in...')

    return (
      // <MuiThemeProvider>  //this should probably live inside of a "Root" or "Main" component
        <BrowserRouter>
          <Routes isAuthenticated={isAuthenticated} />
        </BrowserRouter>
      // </MuiThemeProvider>
    )
  }
}

VibenomicsApp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.authenticated,
})

export default connect(mapStateToProps)(VibenomicsApp);