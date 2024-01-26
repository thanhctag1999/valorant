import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import "../../App.scss";
import PlayerCardService from "../../apis/PlayerCardService";
import { responsive } from "../../utils/common";

const PlayerCards = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlayerCards = async () => {
      try {
        setLoading(true);
        const results = await PlayerCardService.getPlayerCards();
        setData(results.data);
      } catch (error) {
        console.error("Error fetching player cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerCards();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Player Cards</h1>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {data.slice(0, data.length).map((element, index) => {
          return (
            <CustomCard key={index}>
              <CardMedia
                sx={{
                  position: "absolute",
                  height: "100%",
                  objectFit: "contain",
                }}
                className="slider-img"
                component="img"
                image={element.largeArt}
                alt="Agent"
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
                align="center"
                component="div"
                variant="h5"
              >
                {element.displayName}
              </Typography>
            </CustomCard>
          );
        })}
      </Carousel>
      ;
    </div>
  );
};

const CustomCard = styled(Card)({
  maxWidth: 280,
  height: 400,
  borderRadius: 10,
  border: "3px solid grey",
  padding: "5px",
  background: "linear-gradient(to top, #000, transparent)",
  position: "relative",
  cursor: "pointer",
  transition: "border-color 0.3s ease", // Adding transition for a smooth effect
  "&:hover": {
    borderColor: "#fb023c", // Border color on hover
    background: "linear-gradient(to top, #fb023c, transparent)", //
  },
});

export default PlayerCards;
