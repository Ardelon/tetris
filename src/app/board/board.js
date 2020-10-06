import React, {useRef, useState} from 'react';
import {Square, SquareLine,Figures} from './components';

const Board = (props) => {

    const board = useRef(null);
    const [SquareBlock,LBlock] = Figures
    let Lines = []
    
    let i = 0;
    while (i < 20) {
        Lines.push([[`Square_Line_`],[true,false,true,false,true,false,true,false,true,false]]);
        i++
    }

    return (
        <div ref={board} className='board'>
            {Lines.map((value,index) => {    
                const [key,activeSquares] = value     
                return (<SquareLine activeSquares={activeSquares} key={`${key}${index}`}/>);                
            })}
        </div>
    )
}

export default Board;