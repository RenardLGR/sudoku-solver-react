// import { useState } from 'react'

const Buttons = ({isSolHidden, solveGrid, hideGrid, resetGrid}) => {



  return (
    <div>
        <button onClick={resetGrid}>Reset</button>
        {
            isSolHidden ? <button onClick={solveGrid}>Solve</button> : <button onClick={hideGrid}>Hide</button>
        }
    </div>
  )
}

export default Buttons

/* <button onClick={doSmthing}>Click</button>
<button onClick={() => doSmthing()}>Click</button> */