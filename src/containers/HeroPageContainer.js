import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeroPage from '../components/HeroPage';

class HeroPageContainer extends Component {
    render() {
        return (
            <HeroPage hero={this.props.hero} />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return { hero: state.hero }
}

HeroPageContainer.propTypes = {
    hero: PropTypes.object.isRequired
}
export default connect(mapStateToProps)(HeroPageContainer);