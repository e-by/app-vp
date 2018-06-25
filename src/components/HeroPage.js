import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import HeroesApi from '../api/HeroesApi';
import PropTypes from 'prop-types';

class HeroPage extends Component {

    getComics() {
        if (this.props.hero.hasOwnProperty("comics") &&
            this.props.hero.comics.available > 0) {
            //console.log(this.props.hero.comics.items);
            return (
                <div className="hero-comics">
                    <div className="sub-title">Comics</div>
                    <ul>
                        {
                            this.props.hero.comics.items.map((comic, key) => {
                                return (
                                    <li key={key}>
                                        <a href={comic.resourceURI +'?' + HeroesApi.getQueryParams()} target="_blank">
                                            {comic.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        }
    }

    getDescription() {
        if(this.props.hero.hasOwnProperty("description") && 
            this.props.hero.description !== "") {
            return(
                    <div className="sub-title">
                        Description
                        <div className="hero-description">{this.props.hero.description}</div>
                    </div>
            )
        }
        return null;
    }

    getExtLinks(linkProps) {
        const faIcon = ["far fa-address-card", "fas fa-globe-americas", "fas fa-book"];
        if (linkProps === undefined || linkProps.length === 0) {
            return;
        }
        return (
            <div className="ext-links">
                <ul>
                    {
                        linkProps.map((linkObj, index) => {
                            return (<li key={index}><a href={linkObj.url} target="_blank"><FontAwesome name={faIcon[index]} /> {linkObj.type}</a> </li>)
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        let thumbnail = '';
        const props = this.props.hero;
        if (props.hasOwnProperty('thumbnail')) {
            thumbnail = props.thumbnail.path + '.' + props.thumbnail.extension;
        }

        return (
            <div className="hero-page-container">
                <div className="heroes-list-title">{props.name}</div>
                <div className="hero-page">
                    <div className="img-links-container">
                        <img src={thumbnail} alt={props.name}/>
                        <div>{this.getExtLinks(props.urls)}</div>
                    </div>
                    {this.getDescription()}
                    {this.getComics()}
                </div>
            </div>
        );
    }
}

HeroPage.propTypes = {
    hero : PropTypes.shape({
        comics : PropTypes.object,
        description : PropTypes.string,
        name: PropTypes.string
    }).isRequired
}

export default HeroPage;