import { Pokecard } from "./PokeCard";
import './Pokedex.css'

function Pokedex({ pokemon }) {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Danny's Pokedex</h1>
            <div className="Pokedex-cards">
                {pokemon.map(p => <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />)}
            </div>
        </div>
    )
}

export { Pokedex }