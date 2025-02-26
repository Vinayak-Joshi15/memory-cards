import React, { useState } from "react";

export default function Body({Current,Best}){
    const [start , setStart] = useState(1);
    const [cards,setCards] = useState(0);
    const [gameOver,setGameOver] = useState(1);
    let arr = [];
    let ans = [];
    function fetchPokemons(){
        for(let i=0;i<5;i++){
           let num = Math.floor(Math.random() * 50 + 1);
        
        /*if(!(num in ans)){
            let obj = {name:"",id: "",img: ""};
            fetch(`https://pokeapi.co/api/v2/pokemon/${num}`).then(response => response.json()).then(all => {obj.name = all.name; obj.id = all.id;obj.img = `https://pokeres.bastionbot.org/images/pokemon/${all.id}.png`;});
            arr.push(obj);
            ans.push(num);
            i++;
        }*/
        }
        
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
        fetchPokemons();
        console.log(arr);
        
        return(
            <div className="grid grid-cols-3 gap-4 p-4">
      {arr.map((pokemon) => (
        <div key={pokemon.id} className="bg-white shadow-lg rounded-lg p-4">
          <img src={pokemon.image} alt={pokemon.name} className="w-full h-32 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{pokemon.name}</h2>
          <p className="text-gray-600">Type: {pokemon.type}</p>
        </div>
      ))}
    </div>
  );
        
    }
}