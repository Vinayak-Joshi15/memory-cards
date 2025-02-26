import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Body({ Current, Best }) {
    const [start, setStart] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);
    const [doneId,setDoneId] = useState([]);
    const [score,setScore] = useState(0);
    const [bestScore,setBestScore] = useState(0);

    // Function to fetch Pokémon data
    async function fetchPokemons() {
        let pokemons = [];
        let usedIds = new Set();

        while (pokemons.length < 6) {
            let num = Math.floor(Math.random() * 20) + 1;
            if (!usedIds.has(num)) {
                usedIds.add(num);
                try {
                    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
                    let data = await response.json();
                    pokemons.push({
                        name: data.name,
                        id: data.id,
                        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
                    });
                } catch (error) {
                    console.error("Error fetching Pokémon:", error);
                }
            }
        }

        setCards(pokemons);
    }

    useEffect(() => {
        if (!start && !gameOver) {
            fetchPokemons();
        }
    }, [start, gameOver, score, doneId]);

    if (start) {
        return (
            <div className="border-2 rounded flex flex-col border-amber-50 mx-50 my-25 py-10 items-center justify-center gap-5">
                <div className="text-white text-3xl">Let's Play</div>
                <button
                    className="flex bg-transparent text-3xl text-white rounded-2xl border-2 border-amber-100 px-2.5 py-2 items-center justify-center cursor-pointer"
                    onClick={() => {
                        setStart(false);
                        setGameOver(false);
                    }}
                >
                    Start
                </button>
            </div>
        );
    } else if (gameOver) {
        return (
            <div className="border-2 rounded flex flex-col border-amber-50 mx-50 my-25 py-10 items-center justify-center">
                <div className="text-white text-2xl">Game Over</div>
                <div className="text-white text-2xl">Current Score: {Current}</div>
                <div className="text-white text-2xl">Best Score: {Best}</div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-wrap gap-4 justify-center">
                {cards.map((pokemon) => (
                    <Card key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.image} call = {()=>{
                        if(doneId.includes(pokemon.id)){
                            setGameOver(1);
                        }else{
                        setDoneId(prevDoneId => [...prevDoneId, pokemon.id]);
                        console.log(doneId);
                        }
                        
                    }} />
                ))}
            </div>
        );
    }
}
