import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class HeroThumbnail extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onHeroClicked(this.props.index, this.props.heroId);
        //Scroll to position jquery to animate
        $('html,body').animate({
            scrollTop: $(".hero-page").offset().top},
            'slow');
    }
    render() {
        let className = this.props.isActive ? 'hero-li-active' : '';
        return (
            <li className={className} key={this.props.id} onClick={this.handleClick}>
                <img className="hero-menu-thumbnail" src={this.props.img} 
                alt={`${this.props.name} thumbnail`} />
                <div className="hero-name">{this.props.name}</div>
            </li>
        )
    }
}
export default HeroThumbnail;

HeroThumbnail.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number
}
