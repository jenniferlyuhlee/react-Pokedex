import React from 'react';

function Pokecard({id, name, type, base_experience}){
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-title">{name}</h2>
            <img className="Pokecard-img"
            src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
            alt = {name}/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export default Pokecard;