import React, {useState} from 'react';

const SquareBlock = (props) => {

    let table = [{line:1,value:[]},{line:2,value:[]}];
    let i = 0

    while (i < 2) {       
        table[i].value = Array(10).fill(false)       
        i++        
    }

    table[0].value[4] = true;
    table[0].value[5] = true;
    table[1].value[4] = true;
    table[1].value[5] = true;

    return table
}

const LBlock = (props) => {
    
    
    return (
        <div>

        </div>
    )
}

const Figures = [SquareBlock,LBlock];

export default Figures;