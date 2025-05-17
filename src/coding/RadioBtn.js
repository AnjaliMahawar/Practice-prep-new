import React, { useState } from 'react'

const RadioBtn = () => {
    const[game,setGame]=useState('')
    const[day,setDay]=useState('')
    const games = ["cricket", "hockey", "ludo", "basketBall"]
    const days = ["weekday", "weekend"]
    console.log("game",game," ","day",day)
    return (
        <div>
            <h1>Game</h1>
            {
                games.map((val, index) => {
                    return <div key={index}>
                        <input type='radio' id={val} name='anju' value={val} onClick={()=>{setGame(val)}}/>
                        <label for={val}>{val}</label><br/>
                    </div>
                })
            }
            <h1>day</h1>
             {
                days.map((val, index) => {
                    return <div key={index}>
                        <input type='radio' name='anju' id={val} value={val} onClick={()=>{setDay(val)}}/>
                        <label for={val}>{val}</label><br/>
                    </div>
                })
            }
          <h1 style={{color:"red"}}>you will play {game} on {day}</h1>

        </div>
    )
}

export default RadioBtn