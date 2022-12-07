import { useState } from 'react'


function Cell({cell, updateCell}) {
    const rowIndx = cell.rowIndx
    const cellIndx = cell.cellIndx

    const [cellState, updateCellState] = useState(cell.cellValue)

    function handleChange(event){
        updateCellState(event.target.value)
        updateCell(rowIndx, cellIndx, event.target.value)
    }


    return (
        <td className="cell">
            {/* <input type="text" maxLength="1" value={cellState} onChange={handleChange} /> */}
            <input type="text" maxLength="1" value={cell.cellValue} onChange={handleChange} />
        </td>
    )
}

export default Cell