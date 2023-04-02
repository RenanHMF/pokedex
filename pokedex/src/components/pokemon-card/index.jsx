import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function PokemonCard({ pokemonName, pokemonImagem, pokemonTypes}) {

    const pokemonTypeHandler = () => {
        if (pokemonTypes[1]){
            return (pokemonTypes[0].type.name.charAt(0).toUpperCase() + pokemonTypes[0].type.name.slice(1)) + "/" + (pokemonTypes[1].type.name.charAt(0).toUpperCase() + pokemonTypes[1].type.name.slice(1));
        } return pokemonTypes[0].type.name;
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 300 }}
        image={pokemonImagem}
        title="pokemon image"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
            <Typography variant=" h6" component="div">
                {pokemonTypeHandler()}
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}