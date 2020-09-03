import { connect } from "react-redux";
import React from 'react';
import MainPage from './MainPage';

const MainPageContainer = (props) => {
    return (
        <MainPage {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        quiz: state.mainPage.quiz,
        local: state.header.local
    }
}

export default connect(mapStateToProps, {  })(MainPageContainer);