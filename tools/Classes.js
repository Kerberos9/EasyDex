export class LitePokemon {

    constructor(pokemon) {
        this.weight = pokemon.weight;
        this.name = pokemon.name;
        this.id = pokemon.id
        this.types = [
            pokemon.types[0].type.name,
            pokemon.types[1] ? pokemon.types[1].type.name : ''
        ]
        this.stats = new Stats();
        this.stats.hp = pokemon.stats[0].base_stat;
        this.stats.attack = pokemon.stats[1].base_stat;
        this.stats.defense = pokemon.stats[2].base_stat;
        this.stats.spattack = pokemon.stats[3].base_stat;
        this.stats.spdefense = pokemon.stats[4].base_stat;
        this.stats.speed = pokemon.stats[5].base_stat;
        this.sprite = pokemon.sprites.front_default;
    }
}

export class Stats {
    hp = 0;
    attack = 0;
    defense = 0;
    spattack = 0;
    spdefense = 0;
    speed = 0;
}