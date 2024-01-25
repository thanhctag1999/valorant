import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import AgentService from "../../apis/AgentService";
import "../../App.scss";

const Agent = () => {
  const [data, setData] = useState([]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
        const results = await AgentService.getAgents();
        const filteredAgents = results.data.filter(
          (element) => element.fullPortrait !== null
        );
        setData(filteredAgents);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="container">
      <h1>Agents</h1>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {data.slice(0, data.length).map((element, index) => {
          return (
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

export default Agent;
