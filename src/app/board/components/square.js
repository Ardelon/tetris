import React, {useState, useEffect} from 'react';

const Square = (props) => {

    const {active,key} = props;
    console.log(key)
    const [activity, setActivity] = useState(false);
 
    

    // useEffect(() => {
    //     setActivity(active)       
    // }, [active]);

    return (
        <div className='square'>
            {
                active ? <div className='active'/> : <div />
            }
        </div>
    )
}

export default Square;