import './Pokecard.css'

const PokeAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokecard = (props) => {

    let image = `${PokeAPI}${props.id}.png`

    // Pokemon Type will determine the color of the pokecard
    const colors = {
        bug: 'lightgreen',
        fire: 'lightcoral',
        electric: 'lightgoldenrodyellow',
        normal: 'lightgrey',
        flying: 'plum',
        poison: 'purple',
        water: 'lightblue'
    }
    return (
        <div className="Pokecard" style={{ backgroundColor: colors[props.type] }}>
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-image" src={image} alt="" />
            <div className="Pokecard-type">Type: {props.type}</div>
            <div className="Pokecard-exp">Exp: {props.exp}</div>
        </div>
    )
}

export { Pokecard }