"use server";
import { EvolutionClient, PokemonClient } from "pokenode-ts";
import fs from "fs";
import { LitePokemon } from "./Classes.js";

(async () => {
  const api = new PokemonClient();
  const evoApi = new EvolutionClient();

  let pokemonList = await api.listPokemons(0, 5000);
  let pokemonData = [];
  let maxPokemon = 999999999;
  let i = 0;
  console.log(pokemonList);

  for (const pokemon of pokemonList.results) {
    if (i >= maxPokemon) break;
    let poke = await api.getPokemonByName(pokemon.name);
    let species = await api.getPokemonSpeciesById(poke.species.url.split("/").slice(-2)[0]);
    let evoChain = species.evolution_chain?.url.split("/").slice(-2)[0];
    if (evoChain) {
      let evos = await evoApi.getEvolutionChainById(evoChain);
      poke.evolutions = evos.chain?.species?.name + ",";
      evos.chain?.evolves_to?.forEach((p) => {
        poke.evolutions += `${p.species.name},`;
        p.evolves_to?.forEach((p) => {
          poke.evolutions += `${p.species.name},`;
          p.evolves_to?.forEach((p) => {
            poke.evolutions += `${p.species.name},`;
            p.evolves_to?.forEach((p) => {
              poke.evolutions += `${p.species.name},`;
              p.evolves_to?.forEach((p) => {
                poke.evolutions += `${p.species.name},`;
              });
            });
          });
        });
      });
    }
    pokemonData.push(new LitePokemon(poke));

    i++;
    console.log(i);
  }
  fs.writeFileSync("../src/data/pokemon.json", JSON.stringify(pokemonData));

})();
