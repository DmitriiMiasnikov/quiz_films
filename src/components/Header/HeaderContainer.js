import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.header.menuItems,
        local: state.header.local
    }
}
export default connect(mapStateToProps, {  })(HeaderContainer);