const cardStyles = (pokemonTypes) => { 
    const types = []
    pokemonTypes.map(type => types.push(type.type.name))
    return [
    (types[0] === "grass" && "card-pokemon text-success grass") ||
    (types[0] === "bug" && "card-pokemon text-success grass") ||
    (types[0] === "poison" && "card-pokemon text-success grass") ||
    (types[0] === "fire" && "card-pokemon text-danger fire") ||
    (types[0] === "water" && "card-pokemon text-primary water") ||
    (types[0] === "ice" && "card-pokemon text-primary water") ||
    (types[0] === "electric" && "card-pokemon text-warning electric") ||
    (types[0] === "ground" && "card-pokemon text-dark ground") ||
    (types[0] === "rock" && "card-pokemon text-dark ground") ||
    (types[0] === "fighting" && "card-pokemon text-dark ground") ||
    (types[0] === "psychic" && "card-pokemon text-dark psychic") ||
    (types[0] === "ghost" && "card-pokemon text-dark psychic") ||
    ("card-pokemon text-dark normal")
   ]
}

const progressVariants = (pokemonTypes) => {
    const types = []
    pokemonTypes.map(type => types.push(type.type.name))
    return (
    (types[0] === "grass" && "success") ||
    (types[0] === "bug" && "success") ||
    (types[0] === "poison" && "success") ||
    (types[0] === "fire" && "danger") ||
    (types[0] === "water" && "primary") ||
    (types[0] === "electric" && "warning") ||
    (types[0] === "ground" && "dark") ||
    (types[0] === "rock" && "dark") ||
    (types[0] === "fighting" && "dark") ||
    (types[0] === "psychic" && "dark") ||
    (types[0] === "ghost" && "dark") ||
    ("secondary")
    )
}

   export {cardStyles, progressVariants}