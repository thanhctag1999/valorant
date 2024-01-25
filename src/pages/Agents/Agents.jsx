import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "@emotion/styled";
import { Card, CardMedia, Typography } from "@mui/material";
import AgentService from "../../apis/AgentService";

const Agent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const results = await AgentService.getAgents();
        const filteredAgents = results.data.filter(
          (element) => element.fullPortrait !== null
        );
        setData(filteredAgents);
      } catch (error) {
        console.error("Error fetching agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
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
      <h1>Agents</h1>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {data.map((element, index) => (
          <CustomCard key={index}>
            <NavLink to={`/agents/detail/${element.uuid}`}>
              <CardMedia
                sx={{
                  position: "absolute",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="slider-img"
                component="img"
                image={element.fullPortrait}
                alt="Agent"
              />
              <Typography
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  marginLeft: "10px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "35px",
                }}
                align="center"
                component="div"
                variant="h5"
              >
                {element.displayName}
              </Typography>
            </NavLink>
          </CustomCard>
        ))}
      </Carousel>
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
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: "#fb023c",
    background: "linear-gradient(to top, #fb023c, transparent)",
  },
});

export default Agent;
