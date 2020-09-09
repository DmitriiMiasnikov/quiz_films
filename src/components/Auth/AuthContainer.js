import { connect } from "react-redux";
import React from 'react';
import Auth from './Auth';

const AuthContainer = (props) => {
    return (
        <MainPage {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {  })(AuthContainer);