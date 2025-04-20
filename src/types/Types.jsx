import "./Types.css";

export const Types = ({firstType, secondType}) => {
    let FirstType = getTypeFromString(firstType);
    let SecondType = getTypeFromString(secondType);
    return (
        <div>
            {FirstType}{SecondType}
        </div>
    );
};

function getTypeFromString(type) {
    switch (type) {
        case "bug":
            return <Bug/>
        case "dark":
            return <Dark/>
        case "dragon":
            return <Dragon/>
        case "electric":
            return <Electric/>
        case "fairy":
            return <Fairy/>
        case "fighting":
            return <Fighting/>
        case "fire":
            return <Fire/>
        case "flying":
            return <Flying/>
        case "ghost":
            return <Ghost/>
        case "grass":
            return <Grass/>
        case "ground":
            return <Ground/>
        case "ice":
            return <Ice/>
        case "normal":
            return <Normal/>
        case "poison":
            return <Poison/>
        case "psychic":
            return <Psychic/>
        case "rock":
            return <Rock/>
        case "steel":
            return <Steel/>
        case "water":
            return <Water/>
    }
}

export const Bug = () => {
    return (
        <span className={"type bug"}>Bug</span>
    )
}
export const Dark = () => {
    return (
        <span className={"type dark"}>Dark</span>
    )
}

export const Dragon = () => {
    return (
        <span className={"type dragon"}>Dragon</span>
    )
}

export const Electric = () => {
    return (
        <span className={"type electric"}>Electric</span>
    )
}

export const Fairy = () => {
    return (
        <span className={"type fairy"}>Fairy</span>
    )
}

export const Fighting = () => {
    return (
        <span className={"type fighting"}>Fighting</span>
    )
}

export const Fire = () => {
    return (
        <span className={"type fire"}>Fire</span>
    )
}

export const Flying = () => {
    return (
        <span className={"type flying"}>Flying</span>
    )
}

export const Ghost = () => {
    return (
        <span className={"type ghost"}>Ghost</span>
    )
}

export const Grass = () => {
    return (
        <span className={"type grass"}>Grass</span>
    )
}

export const Ground = () => {
    return (
        <span className={"type ground"}>Ground</span>
    )
}

export const Ice = () => {
    return (
        <span className={"type ice"}>Ice</span>
    )
}

export const Normal = () => {
    return (
        <span className={"type normal"}>Normal</span>
    )
}

export const Poison = () => {
    return (
        <span className={"type poison"}>Poison</span>
    )
}

export const Psychic = () => {
    return (
        <span className={"type psychic"}>Psychic</span>
    )
}

export const Rock = () => {
    return (
        <span className={"type rock"}>Rock</span>
    )
}

export const Steel = () => {
    return (
        <span className={"type steel"}>Steel</span>
    )
}

export const Water = () => {
    return (
        <span className={"type water"}>Water</span>
    )
}

