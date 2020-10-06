import React from 'react';
import PropTypes from 'prop-types';
import {Square} from './'

const SquareLine = (props) => {

    const {activity} = props;
    
    return (
        <div className='square--line'>
            {activity.map((isActive,index) => {                            
                // console.log(isActive)
                return <Square isActive={isActive} key={`Square_${index}`} />
            })}
            
        </div>
    )
}

SquareLine.propTypes = {
    activity        : PropTypes.array.isRequired,
}

SquareLine.defaultProps = {
    activity        : []
}

export default SquareLine;

// activity={line[index] ? true : false}