import React, {useRef, useState, useEffect} from 'react';
import {Square, SquareLine,Figures} from './components';
import TableGenerator from './tableGenerator';

const Board = (props) => {

    const board = useRef(null);
    const figureMoverInterval = useRef(0);

    const [tableState, setTableState] = useState(null);
    const [figureState, setFigureState] = useState(null);
    const [figure, setFigure] = useState(0);

    const [squareBlock] = Figures;
    const template = squareBlock();

    useEffect(() => {
        setTableState(TableGenerator);
        setFigureState(template)
    }, []);

    useEffect(() => {
        clearInterval(figureMoverInterval.current);
        figureMoverInterval.current = setInterval(() => { moveFigures(); setFigure(figure+1)}, 1000)      
    })

    const moveFigures = () => {
        let _figureState = figureState
        figureState.map((figureValue, index) => {
            const {line} = figureValue;
            _figureState[index].line = line + 1;
        }) 
        return setFigureState(_figureState);
    }

   useEffect(() => {}, [figure])

    if (!tableState) {
        return (
            <div>
                <h1>Bekle</h1>
            </div>
        )
    }

    return (
        <div ref={board} className='board'>
            {tableState.map((tableValue,tableIndex) => {       
                let activity = tableValue;  
                figureState.map((figureValue,figureIndex) => {                
                    const {line,value} = figureValue
                    if(tableIndex === line) {
                        activity = value;            
                    }
                })    
                return (<SquareLine activity={activity}   key={`Square_Lines${tableIndex}`}/>);                
            })}
        </div>        
    )
}

export default Board;