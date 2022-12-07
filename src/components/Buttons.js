// import { useState } from 'react'

const Buttons = ({isSolHidden, solveGrid, logState}) => {



  return (
    <div>
        <button onClick={()=>logState()}>Reset</button>
        {
            isSolHidden ? <button onClick={solveGrid}>Solve</button> : <button>Hide</button>
        }
    </div>
  )
}

export default Buttons

/* <button onClick={doSmthing}>Click</button>
<button onClick={() => doSmthing()}>Click</button> */