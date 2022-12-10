// import { useState } from 'react'

import React from 'react'
import Cell from "./Cell"

const Row = ({ row, updateCell, isSolHidden, rowColors }) => {
  const rowIndx = row.rowIndx
  // const [rowState, updateRowState] = useState(row.rowVals)

  return (
    <tr className='row'>
      <Cell
        cell={{ cellValue: row.rowVals[0], rowIndx: rowIndx, cellIndx: 0 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[0]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[1], rowIndx: rowIndx, cellIndx: 1 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[1]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[2], rowIndx: rowIndx, cellIndx: 2 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[2]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[3], rowIndx: rowIndx, cellIndx: 3 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[3]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[4], rowIndx: rowIndx, cellIndx: 4 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[4]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[5], rowIndx: rowIndx, cellIndx: 5 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[5]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[6], rowIndx: rowIndx, cellIndx: 6 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[6]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[7], rowIndx: rowIndx, cellIndx: 7 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[7]}
      />
      <Cell
        cell={{ cellValue: row.rowVals[8], rowIndx: rowIndx, cellIndx: 8 }}
        updateCell={updateCell}
        isSolHidden={isSolHidden}
        cellColor={rowColors[8]}
      />
    </tr>
  )
}

export default Row