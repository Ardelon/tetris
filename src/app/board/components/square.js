import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {

    const {isActive} = props;

    // const [activity, setActivity] = useState(false);
 
    

    // useEffect(() => {
    //     setActivity(active)       
    // }, [active]);

    return (
        <div className='square'>
            {
                isActive ? <div className='active'/> : <div />
            }
        </div>
    )
}

Square.propTypes = {
	active		: PropTypes.bool,
}

Square.defaultProps = {
    active      : false
}



export default Square;