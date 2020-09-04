import React from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';

const FooterContainer = (props) => {
    const scrollTop = () => {
        return animateScroll.scrollToTop({duration: 300})
    }
    return <Footer {...props} scrollTop = {scrollTop}/>
}

const mapStateToProps = (state) => {
    return {
        local: state.header.local,
        hideArrow: state.quiz.hideArrow
    }
}
export default connect(mapStateToProps, {})(FooterContainer);