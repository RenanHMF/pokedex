import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/nav-bar";
import PokemonCard from "../components/pokemon-card";
import { Container, Grid } from "@mui/material";

export const Home = () => {
    const [pokemonData, setPokemonData] = useState([]);;
    
    useEffect(() => {
        getPokemonData()
    }, [])

    const getPokemonData = () => {
        var endpoints = [];
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemonData(res));
        
        // axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
        // .then((result) => setPokemonData(result.data.results))
        // .catch((error) => console.log(error));
    }

    const searchPokemon = (name) => {
        var filteredPokemon = [];
        if (name===""){
            getPokemonData();
        }
        for (var i in pokemonData){
            if (pokemonData[i].data.name.includes(name.toLowerCase())) {
                filteredPokemon.push(pokemonData[i]);
            }
        }
        setPokemonData(filteredPokemon);
    }

    return ( 
        <div style={{backgroundColor:"#3b3a3a"}}>
            <Navbar  searchPokemon={searchPokemon} />
            <Container maxWidth="false" >
                <Grid container spacing={2.4}>
                    {pokemonData.map((pokemon) => (
                        <Grid item xs={6} sm={4} md={2.4}>
                            <PokemonCard pokemonName={pokemon.data.name} pokemonImagem={pokemon.data.sprites.front_shiny} pokemonTypes={pokemon.data.types}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            
        </div>
    )
}