import React from 'react';
import Pokecard from './Pokecard';

function Pokedex({pokemons, isWinner, totalExp}){
    let message = null;
    if (isWinner){
        message = <p className="Pokedex-winner">THIS HAND WINS!</p>
    }
    return(
        <div className='Pokedex'>
            {pokemons.map(p => (
                <Pokecard id = {p.id} 
                key = {p.id}
                name = {p.name} 
                type = {p.type} 
                base_experience = {p.base_experience}/>
            ))}
            <h4>Total Experience: {totalExp}</h4>
            {message}
        </div>
    )
}

export default Pokedex;