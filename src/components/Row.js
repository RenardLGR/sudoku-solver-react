import { useState } from 'react'

import React from 'react'
import Cell from "./Cell"

const Row = ({row}) => {
    const rowIndx = row.rowIndx
    const [rowState, updateRowState] = useState(row.rowVals)

  return (
    <tr className='row'>
        <Cell cell={{cellValue: rowState[0], rowIndx: rowIndx, cellIndx: 0}} />
        <Cell cell={{cellValue: rowState[1], rowIndx: rowIndx, cellIndx: 1}} />
        <Cell cell={{cellValue: rowState[2], rowIndx: rowIndx, cellIndx: 2}} />
        <Cell cell={{cellValue: rowState[3], rowIndx: rowIndx, cellIndx: 3}} />
        <Cell cell={{cellValue: rowState[4], rowIndx: rowIndx, cellIndx: 4}} />
        <Cell cell={{cellValue: rowState[5], rowIndx: rowIndx, cellIndx: 5}} />
        <Cell cell={{cellValue: rowState[6], rowIndx: rowIndx, cellIndx: 6}} />
        <Cell cell={{cellValue: rowState[7], rowIndx: rowIndx, cellIndx: 7}} />
        <Cell cell={{cellValue: rowState[8], rowIndx: rowIndx, cellIndx: 8}} />
    </tr>
  )
}

export default Row