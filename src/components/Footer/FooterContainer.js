import React from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';

const FooterContainer = (props) => {
    return <Footer {...props} />
}

const mapStateToProps = (state) => {
    return {
        local: state.header.local
    }
}
export default connect(mapStateToProps, {})(FooterContainer);