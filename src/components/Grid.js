// import { useState } from 'react'
import Row from "./Row"

const Grid = ({gameState, updateCell}) => {

    //We are keeping track of the unsolved grid and the solved grid (which will be calculated when the user wants it, as he simply enters values,: only unsolved one is updated)

    const isSolHidden = gameState.isSolHidden

    return (
        <table id='grid'>
            <caption>Title holder</caption>
            <colgroup span={3}></colgroup>
            <colgroup span={3}></colgroup>
                <tbody>
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[0] : gameState.solvedGrid[0], rowIndx: 0}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[0]}
                    />
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[1] : gameState.solvedGrid[1], rowIndx: 1}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[1]}
                    />
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[2] : gameState.solvedGrid[2], rowIndx: 2}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[2]}
                    />
                </tbody>
                <tbody>
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[3] : gameState.solvedGrid[3], rowIndx: 3}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[3]}
                    />
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[4] : gameState.solvedGrid[4], rowIndx: 4}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[4]}
                    />
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[5] : gameState.solvedGrid[5], rowIndx: 5}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[5]}
                    />
                </tbody>
                <tbody>
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[6] : gameState.solvedGrid[6], rowIndx: 6}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[6]}
                    />
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[7] : gameState.solvedGrid[7], rowIndx: 7}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[7]}
                    />
                    < Row 
                        row={{rowVals: isSolHidden ? gameState.unsolvedGrid[8] : gameState.solvedGrid[8], rowIndx: 8}}
                        updateCell={updateCell} 
                        isSolHidden={isSolHidden} 
                        rowColors={gameState.colorsGrid[8]}
                    />
                </tbody>
        </table>
    )
}

export default Grid