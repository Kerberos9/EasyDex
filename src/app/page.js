'use client';
import { useState } from 'react';
import styles from './page.module.css';
import PokemonList from "@/pokemon-list/PokemonList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className={styles.main}>
      <input 
        type="text" 
        placeholder="Search Pokémon" 
        value={searchTerm} 
        onChange={handleInputChange} 
        className={styles.input}
      />
      <PokemonList searchTerm={searchTerm} />
    </main>
  );
}
