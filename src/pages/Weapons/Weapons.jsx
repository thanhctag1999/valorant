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
import WeaponsCard from "../../components/weapon_card";
import WeaponService from "../../apis/WeaponService";

const Weapons = () => {
  const [category, setCategory] = React.useState("Pistols");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        setLoading(true);
        const results = await WeaponService.getWeapons();
        setData(
          results.data.filter(
            (element) => element.shopData?.category === category
          )
        );
      } catch (error) {
        console.error("Error fetching weapons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeapons();
  }, [category]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

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
              label="Category"
              input={<BootstrapInput />}
              onChange={(event) => changeCategory(event)}
            >
              <MenuItem value="Pistols">Pistols</MenuItem>
              <MenuItem value="SMGs">SMGs</MenuItem>
              <MenuItem value="Shotguns">Shotguns</MenuItem>
              <MenuItem value="Rifles">Rifles</MenuItem>
              <MenuItem value="Sniper Rifles">Sniper Rifles</MenuItem>
              <MenuItem value="Heavy Weapons">Heavy Weapons</MenuItem>
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
          {data.map((element, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <WeaponsCard
                id={element.uuid}
                name={element.displayName}
                image={element.displayIcon}
                shopData={element.shopData}
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
