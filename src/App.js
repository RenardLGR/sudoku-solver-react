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