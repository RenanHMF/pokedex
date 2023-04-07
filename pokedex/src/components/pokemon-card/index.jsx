import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function PokemonCard({
  pokemonName,
  pokemonImagem,
  pokemonTypes,
  pokemonId
}) {
  // const pokemonTypeHandler = () => {
  //     if (pokemonTypes[1]){
  //         return (pokemonTypes[0].type.name.charAt(0).toUpperCase() + pokemonTypes[0].type.name.slice(1)) + "/" + (pokemonTypes[1].type.name.charAt(0).toUpperCase() + pokemonTypes[1].type.name.slice(1));
  //     } return pokemonTypes[0].type.name.charAt(0).toUpperCase() + pokemonTypes[0].type.name.slice(1);
  // } pokemonTypes[0].type.name+".png"+ "/" + pokemonTypes[1].type.name

  const pokemonTypeHandler = () => {
    if (pokemonTypes[1]){
    return (
        <Box style={{ display: "flex", justifyContent: "space-between", width:"100%", alignItems:"center"}}>
          <div style={{ display: "flex", gap:"0.2em"}}>
            <CardMedia component="img" title="pokemon type" image={`assets/pokemonTypes/${pokemonTypes[0].type.name}.png`} sx={{ height: 30 }}/>  
            <CardMedia component="img" title="pokemon type" image={`assets/pokemonTypes/${pokemonTypes[1].type.name}.png`} sx={{ height: 30 }}/>  
          </div>
          <p>
            {"#"+("0000"+pokemonId).slice(-4)}
          </p>
        </Box>
    );} return (
      <Box style={{ display: "flex", justifyContent: "space-between", width:"100%", alignItems:"center"}}>
      <div style={{ display: "flex", gap:"0.2em"}}>
        <CardMedia component="img" title="pokemon type" image={`assets/pokemonTypes/${pokemonTypes[0].type.name}.png`} sx={{ height: 30 }}/>  
      </div>
      <p>
        {"#"+("0000"+pokemonId).slice(-4)}
      </p>
    </Box>     
      )
  };

  return (
    <Card sx={{ maxWidth: 400 }}  style={{border: "5px ", borderRadius:"10px"}}s>
      <CardMedia
        component="img"
        sx = {{backgroundColor:"#f2f2f2"}}
        image={pokemonImagem}
        title="pokemon image"
      />
      <CardContent sx = {{backgroundColor:"#fff"}}>
        <CardContent sx={{display: "flex",}}>
          <Typography gutterBottom variant="h4" component="div"> 
            {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          </Typography>
        </CardContent>
        <Box display="flex" >
            {pokemonTypeHandler()}
        </Box>
      </CardContent>
    </Card>
  );
}
