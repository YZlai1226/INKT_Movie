import React from 'react';
import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { CoPresent } from '@mui/icons-material';
import { FormControlUnstyledContext } from '@mui/base';
import Autocomplete from '@mui/material/Autocomplete';


const Filters = (props) => {
  const [value, setValue] = React.useState();


  return (
    <div>
      <InputLabel id="demo-simple-select-label">Number of Votes (more than)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.voteCount}
        onChange={props.handleChangeVoteCount}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={1}>1</MenuItem>
      </Select>

      {props.genres &&

        <Autocomplete
          id="combo-box-demo"
          options={props.genres}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          onChange={props.handleChangeMovieGenre}
          renderInput={(params) =>
            <TextField {...params} value={value} label="Genres"/>}
        />
      }
{/* 
      {props.genres &&

        <Autocomplete
          id="highlights-demo"
          sx={{ width: 300 }}
          options={props.genres}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} value={value} label="Genres" onChange={props.handleChangeMovieGenre} />
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.name, inputValue);
            const parts = parse(option.name, matches);
            return (
              <li {...props}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </li>
            );
          }}
        />
      } */}


      <InputLabel id="demo-simple-select-label">Score (more than)</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.movieScore}
        onChange={props.handleChangeScore}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={1}>1</MenuItem>
      </Select>
      <br />
      <TextField
        id="outlined-name"
        label="Movie Title"
        onChange={props.handleChangeMovieTitle}
      />
    </div>
  );
}

export default Filters;