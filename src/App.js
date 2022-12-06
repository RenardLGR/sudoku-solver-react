import React, { useState } from 'react'
import Cell from './components/Cell';
import Game from "./components/Game"


function App(){

    return(
        <Game />
    )

}


export default App;


//TODO : Highlight in red if two same numbers in the same unit
//MAKE every third col and line a bit bolder in our grid
//Accept only 0-9 numbers
//On cell hover highlight it : check :hover and :focus

//Architecture is like so :
/* <Game>
        <Grid >
            <table>
                <Row>
                    <Cell><input/></Cell> *9
                </Row>
                *9
            </table>
        <Grid />
        <Buttons>
            <button>Reset</button>
            <button>Solve/Hide</button>
        <Buttons />
<Game/> */