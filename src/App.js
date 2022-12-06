import { useState } from 'react'
import Grid from "./components/Grid"


function App(){
    return(
        <Grid />
    )

}


export default App;


//TODO : Highlight in red if two same numbers in the same unit
//MAKE every third col and line a bit bolder in our grid
//Accept only 0-9 numbers
//On cell hover highlight it : check :hover and :focus