import React, { useState } from "react";
import Card from "./Card";

export default function Body({Current,Best}){
    const [start , setStart] = useState(1);
    const [cards,setCards] = useState(0);
    const [gameOver,setGameOver] = useState(1);
    let arr = [];
    let ans = [];
    function fetchPokemons(){
        let obj = {};
        let num = Math.floor(Math.random()*20 + 1);
        fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(response => response.json())
        .then(allpokemon => {obj.name = allpokemon.name; obj.id = allpokemon.id;});
        return obj;
      }
    if(start){
        return(
            <div className="border-2 rounded flex flex-col border-amber-50 mx-50 my-25 py-10 items-center justify-center gap-5">
                    <div className="text-white text-3xl">Lets Play</div>
                    <button className=" flex bg-transparent text-3xl text-white rounded-2xl border-2 border-amber-100 px-2.5 py-2 items-center justify-center cursor-pointer" onClick={() => {
                        setStart(0);
                        setGameOver(0);
                    }}>Start</button>

            </div>
        )
    }

    else if(gameOver){
        return(
            <div className="border-2 rounded flex flex-col border-amber-50 mx-50 my-25 py-10 items-center justify-center">
                    <div className="text-white text-2xl">Game Over</div>
                    <div className="text-white text-2xl">Current Score: {Current}</div>
                    <div className="text-white text-2xl">Best Score: {Best}</div>

            </div>
        )
    }
    else{
        {for(let i=0;i<6;i++){
            let obj = fetchPokemons();
            return(
            <Card name={obj.name} id={obj.id} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${obj.id}.png
`} />
            )
        }}
        
    }
}