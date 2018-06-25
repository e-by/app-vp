import React from 'react';
import PropTypes from 'prop-types';

const HeroesList = ({heroes, children}) => {
    return(
            <ul className="list-group">
                {children}
            </ul>
    );
}
HeroesList.propTypes = {  
    heroes: PropTypes.array,
    children: PropTypes.node
};

export default HeroesList;