import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeroesList from '../components/HeroesList';
import HeroThumbnail from '../components/HeroThumbnail';
import { loadHero } from '../actions/HeroApiActions';

class HeroesListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: null };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index, heroId) {
        this.setState({ activeIndex: index });
        this.props.dispatch(loadHero(heroId));
    }

    render() {
        return (
            <div className="heroes-list-container">
                <div className="heroes-list-title">Select a hero</div>
                <HeroesList>
                    {
                        this.props.heroes.map((hero, index) => {
                            const imgUrl = hero.thumbnail.path + '.' + hero.thumbnail.extension;
                            return (<HeroThumbnail key={index} index={index} heroId={hero.id} name={hero.name} img={imgUrl}
                                onHeroClicked={this.handleClick}
                                isActive={this.state.activeIndex === index} />);
                        })
                    }
                </HeroesList>
            </div>
        )
    }
}

HeroesListContainer.propTypes = {
    heroes: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps)(HeroesListContainer);