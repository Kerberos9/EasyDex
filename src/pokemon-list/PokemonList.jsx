import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PokemonDetail } from "@/pokemon-detail/PokemonDetail";
const pokemonJson = require('../data/pokemon.json');
import "./PokemonList.css";

class PokemonList extends Component {
    render() {
        const { searchTerm } = this.props;

        // Filter Pokémon based on the searchTerm
        const filteredPokemon = searchTerm == '' ? [] : pokemonJson.filter(pokemon =>
            pokemon.evolutions.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const pokemonGrid = filteredPokemon.map(pokemon =>
            <PokemonDetail 
                key={pokemon.id} 
                sprite={pokemon.sprite} 
                id={pokemon.id} 
                name={pokemon.name} 
                stats={pokemon.stats} 
                types={pokemon.types} 
                weight={pokemon.weight} 
            />
        );

        return (
            <div className={'pokemon-grid'}>
                {pokemonGrid}
            </div>
        );
    }
}

PokemonList.propTypes = {
    searchTerm: PropTypes.string.isRequired, // Define prop type for searchTerm
};

export default PokemonList;