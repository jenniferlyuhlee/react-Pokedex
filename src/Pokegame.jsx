import React from 'react';
import Pokedex from './Pokedex';

function Pokegame({pokemons}){
    let hand1 = [...pokemons]
    let hand2 = []

    while (hand2.length < hand1.length){
        // randomly distribute cards from hand1 to hand2
        let randIdx = Math.floor(Math.random() * hand1.length)
        let randPokemon = hand1.splice(randIdx, 1)[0]
        hand2.push(randPokemon);
    }

    // get sum of total experience in each hand
    let exp1 = hand1.reduce((totalExp, p) => totalExp + p.base_experience, 0)
    let exp2 = hand2.reduce((totalExp, p) => totalExp + p.base_experience, 0)

    return (
        <div>
            <Pokedex pokemons={hand1} totalExp={exp1} isWinner={exp1>exp2} />
            <Pokedex pokemons={hand2} totalExp={exp2} isWinner={exp2>exp1} />
        </div>
    )
}

export default Pokegame;