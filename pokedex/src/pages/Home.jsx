import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/nav-bar";
import PokemonCard from "../components/pokemon-card";
import { Container, Grid } from "@mui/material";
import { Skeletons } from "../components/skeletons";

export const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [allPokemonData, setAllPokemonData] = useState([]);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = () => {
    var endpoints = [];
    for (var i = 1; i < 980; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      setPokemonData(res);
      setAllPokemonData(res);
    });

    // axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
    // .then((result) => setPokemonData(result.data.results))
    // .catch((error) => console.log(error));
  };

  const searchPokemon = (name) => {
    var filteredPokemon = [];
    if (name === "") {
      getPokemonData();
    }

    for (var i in allPokemonData){
    if (allPokemonData[i].data.name.includes(name.toLowerCase())) {
        filteredPokemon.push(allPokemonData[i]);
    }}
    setPokemonData(filteredPokemon);

    
  };

  return (
    <div style={{backgroundColor: "#b3b2b2", paddingBottom:"2em", height:"20%"}}>
      <Navbar searchPokemon={searchPokemon} />
      <Container maxWidth="false">
        <Grid container spacing={2.4}>
          {pokemonData.length === 0 ? (
            <Skeletons />
          ) : (
            pokemonData.map((pokemon, key) => (
              <Grid item xs={6} sm={4} md={2} key={pokemon.data.species.url}>
                <PokemonCard
                  pokemonName={pokemon.data.name}
                  pokemonImagem={pokemon.data.sprites.front_default}
                  pokemonTypes={pokemon.data.types}
                  pokemonId = {pokemon.data.id}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
