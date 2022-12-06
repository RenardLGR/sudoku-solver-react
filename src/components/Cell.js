import { useState } from 'react'


function Cell({cell}) {
    const rowIndx = cell.rowIndx
    const cellIndx = cell.cellIndx

    const [cellState, updateCellState] = useState(cell.cellValue)

    function handleChange(event){
        updateCellState(event.target.value)
        //TODO : update parent state
    }


    return (
        <td className="cell">
            <input type="text" maxLength="1" value={cellState} onChange={handleChange} />
        </td>
    )
}

export default Cell