import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import WeaponsCard from "../components/weapon_card";

const data = [
  {
    uuid: 1,
    category: "Sidearms",
    displayName: "Classic",
    displayIcon:
      "https://media.valorant-api.com/weapons/29a0cfab-485b-f5d5-779a-b59f85e204a8/displayicon.png",
  },
  {
    uuid: 2,
    category: "SMGs",
    displayName: "Shorty",
    displayIcon:
      "https://media.valorant-api.com/weapons/42da8ccc-40d5-affc-beec-15aa47b42eda/displayicon.png",
  },
  {
    uuid: 3,
    category: "Shotguns",
    displayName: "Frenzy",
    displayIcon:
      "https://media.valorant-api.com/weapons/44d4e95c-4157-0037-81b2-17841bf2e8e3/displayicon.png",
  },
  {
    uuid: 4,
    category: "Rifles",
    displayName: "Ghost",
    displayIcon:
      "https://media.valorant-api.com/weapons/1baa85b4-4c70-1284-64bb-6481dfc3bb4e/displayicon.png",
  },
  {
    uuid: 1,
    category: "Sniper Rifles",
    displayName: "Sheriff",
    displayIcon:
      "https://media.valorant-api.com/weapons/e336c6b8-418d-9340-d77f-7a9e4cfe0702/displayicon.png",
  },
];

const Weapons = () => {
  const [category, setCategory] = React.useState("Sidearms");
  const [dataList, setDataList] = React.useState(data);

  const changeCategory = (event) => {
    setCategory(event.target.value);
    setDataList(
      data.filter((element) => element.category === event.target.value)
    );
  };

  return (
    <div className="container">
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        justifyContent="space-between"
        alignItems="flex-center"
        flexWrap="wrap"
      >
        <h1>Weapons</h1>
        <Box sx={{ minWidth: 220 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Age"
              input={<BootstrapInput />}
              onChange={(event) => changeCategory(event)}
            >
              <MenuItem value="Sidearms">Sidearms</MenuItem>
              <MenuItem value="SMGs">SMGs</MenuItem>
              <MenuItem value="Shotguns">Shotguns</MenuItem>
              <MenuItem value="Rifles">Rifles</MenuItem>
              <MenuItem value="Sniper Rifles">Sniper Rifles</MenuItem>
              <MenuItem value="Machine Guns">Machine Guns</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {dataList.map((element, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <WeaponsCard
                id={element.id}
                name={element.displayName}
                image={element.displayIcon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(255,0,45,.25)",
    },
  },
}));

export default Weapons;
