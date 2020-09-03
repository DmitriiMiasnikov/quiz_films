import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { switchLocal } from '../../store/headerReducer'

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.header.menuItems,
        local: state.header.local
    }
}
export default connect(mapStateToProps, { switchLocal })(HeaderContainer);