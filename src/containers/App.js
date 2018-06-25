import React, { Component } from 'react';
import HeroesListContainer from './HeroesListContainer';
import HeroPageContainer from './HeroPageContainer';
import logo from '../img/marvel.svg'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="header-logo"><img src={logo} alt="logo"/></div>
                <div className="content">
                    <HeroesListContainer />
                    <HeroPageContainer />
                </div>
                
            </div>
        );
    }
}
export default App;
