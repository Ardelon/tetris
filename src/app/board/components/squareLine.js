import React from 'react';
import {Square} from './'

const SquareLine = (props) => {

    const {activeSquares, key : parentKey} = props;
    console.log(props)
    
    let squares = [];

    let i = 0;
    while (i<10) {
        squares.push([[`Square_${i}`],[activeSquares[i]]])
        i++
    }


    return (
        <div className='square--line'>
            {squares.map((value,index) => {
               
                const [key,IsActive] = value;
                // console.log(`${parentKey}_${key}_${i}`)
              
                return <Square key={`${parentKey}_${key}_${i}`} active={IsActive}/>
            })}
            
        </div>
    )
}

export default SquareLine;