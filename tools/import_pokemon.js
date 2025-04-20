"use server";
import {PokemonClient} from 'pokenode-ts';
import fs from 'fs';
import {LitePokemon} from "./Classes.js";

(async () => {
    const api = new PokemonClient();
    
    let pokemonList = await api.listPokemons(0, 5000);
    let pokemonData = [];
    let maxPokemon = 999999999;
    let i = 0;
    for (const pokemon of pokemonList.results) {
        if (i >= maxPokemon) break;
        let poke = await api
            .getPokemonByName(pokemon.name);
        pokemonData.push(new LitePokemon(poke));
        i++;
        console.log(i);
    }

    fs.writeFileSync("../src/data/pokemon.json", JSON.stringify(pokemonData));
        
     
})();

