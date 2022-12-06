import { useState } from 'react'
// import Cell from "./Cell"
import Row from "./Row"

const Grid = ({}) => {

    const [gridState, updateGridState] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [5, 5, 5, 5, 5, 5, 5, 5, 5],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ])


    function updateCell(rowIndx, colIndx){

    }

    return (
        <table id='grid'>
            <caption>Sudoku of the day</caption>
            <colgroup span={3}></colgroup>
            <colgroup span={3}></colgroup>
                <tbody>
                    < Row row={{rowVals: gridState[0], rowIndx: 0}}/>
                    < Row row={{rowVals: gridState[1], rowIndx: 1}}/>
                    < Row row={{rowVals: gridState[2], rowIndx: 2}}/>
                </tbody>
                <tbody>
                    < Row row={{rowVals: gridState[3], rowIndx: 3}}/>
                    < Row row={{rowVals: gridState[4], rowIndx: 4}}/>
                    < Row row={{rowVals: gridState[5], rowIndx: 5}}/>
                </tbody>
                <tbody>
                    < Row row={{rowVals: gridState[6], rowIndx: 6}}/>
                    < Row row={{rowVals: gridState[7], rowIndx: 7}}/>
                    < Row row={{rowVals: gridState[8], rowIndx: 8}}/>
                </tbody>
        </table>
    )
}

export default Grid