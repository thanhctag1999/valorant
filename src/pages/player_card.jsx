import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../app.scss";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const PlayerCard = () => {
  const images = [
    "https://media.valorant-api.com/playercards/3432dc3d-47da-4675-67ae-53adb1fdad5e/largeart.png",
    "https://media.valorant-api.com/playercards/9397e078-4140-cc2b-4fcd-b0afedb9ece8/largeart.png",
    "https://media.valorant-api.com/playercards/f32eb1e5-4cd3-0520-88a3-0cafb7423002/largeart.png",
    "https://media.valorant-api.com/playercards/7aa1a5fb-4ae3-9a3b-ae04-05bd9fc02413/largeart.png",
    "https://media.valorant-api.com/playercards/9fb348bc-41a0-91ad-8a3e-818035c4e561/largeart.png",
    "https://media.valorant-api.com/playercards/cd5e4a23-4a0b-0f31-d87a-a1a2ec3301f4/largeart.png",
    "https://media.valorant-api.com/playercards/1fb0bee0-49db-fb51-b090-bc834babdb2b/largeart.png",
    "https://media.valorant-api.com/playercards/c3e4a7e3-48c4-8476-6bf5-39892718e1f2/largeart.png",
  ];
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

  return (
    <div className="container">
      <h1>Player Card</h1>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {images.slice(0, images.length).map((image, index) => {
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
                image={image}
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
                Champions LA 2023 Card
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

export default PlayerCard;
