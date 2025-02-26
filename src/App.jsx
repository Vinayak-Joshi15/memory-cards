import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'
import Card from "./Components/Card";


function App() {
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
          <>
          <Header Current={score} Best={bestScore}/>
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
          </>
            
        );
    } else if (gameOver) {
        return (
          <div>
             <Header Current={score} Best={bestScore}/>
              <div className="border-2 rounded flex flex-col border-amber-50 mx-50 my-25 py-10 items-center justify-center">
                  <div className="text-white text-2xl">Game Over</div>
                  <div className="text-white text-2xl">Current Score: {score}</div>
                  <div className="text-white text-2xl">Best Score: {bestScore}</div>
                  <button
                    className="flex bg-transparent text-3xl text-white rounded-2xl border-2 border-amber-100 px-2.5 py-2 my-1 items-center justify-center cursor-pointer"
                    onClick={() => {
                        setStart(false);
                        setGameOver(false);
                        setDoneId([]);
                        setScore(0);
                    }}
                >
                    Play Again?
                </button>
              </div>
          </div>
        );
    } else {
        return (

            <div>
              <Header Current={score} Best={bestScore}/>
              <div className="flex flex-wrap gap-4 justify-center">
                  {cards.map((pokemon) => (
                      <Card key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.image} call = {()=>{
                          if(doneId.includes(pokemon.id)){
                              setGameOver(1);
                              if(score>bestScore){
                                setBestScore(score);

                              }
                          }else{
                          setDoneId(prevDoneId => [...prevDoneId, pokemon.id]);
                          setScore(score => score + 1);
                          console.log(doneId);
                          }
              
                      }} />
                  ))}
              </div>
            </div>
        );
    }

}

export default App
