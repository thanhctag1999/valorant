import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";
import "../../App.scss";

const Agent = () => {
  const data = [
    {
      uuid: 1,
      displayName: "Jett",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      fullPortrait:
        "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
      role: {
        uuid: 1,
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",

        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        },
        {
          slot: "Ability2",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        },
        {
          slot: "Grenade",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        },
        {
          slot: "Passive",
          displayName: "Drift",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        },
      ],
    },
    {
      uuid: 2,
      displayName: "Gekko",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      fullPortrait:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
      role: {
        uuid: 1,
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",

        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        },
        {
          slot: "Ability2",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        },
        {
          slot: "Grenade",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        },
        {
          slot: "Passive",
          displayName: "Drift",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        },
      ],
    },
    {
      uuid: 3,
      displayName: "Yoru",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      fullPortrait:
        "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
      role: {
        uuid: 1,
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",

        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        },
        {
          slot: "Ability2",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        },
        {
          slot: "Grenade",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        },
        {
          slot: "Passive",
          displayName: "Drift",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        },
      ],
    },
    {
      uuid: 3,
      displayName: "Iso",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      fullPortrait:
        "https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/fullportrait.png",
      role: {
        uuid: 1,
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",

        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        },
        {
          slot: "Ability2",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        },
        {
          slot: "Grenade",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        },
        {
          slot: "Passive",
          displayName: "Drift",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        },
      ],
    },
    {
      uuid: 3,
      displayName: "Astra",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      fullPortrait:
        "https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/fullportrait.png",
      role: {
        uuid: 1,
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",

        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        },
        {
          slot: "Ability2",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        },
        {
          slot: "Grenade",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        },
        {
          slot: "Passive",
          displayName: "Drift",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        },
      ],
    },
    {
      uuid: 3,
      displayName: "Phoenix",
      description:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
      fullPortrait:
        "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
      role: {
        uuid: 1,
        displayName: "Duelist",
        description:
          "Duelists are self-sufficient fraggers who their team expects, through abilities and skills, to get high frags and seek out engagements first.",

        displayIcon:
          "https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png",
      },
      abilities: [
        {
          slot: "Ability1",
          displayName: "Updraft",
          description: "INSTANTLY propel Jett high into the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability1/displayicon.png",
        },
        {
          slot: "Ability2",
          displayName: "Tailwind",
          description:
            "ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ability2/displayicon.png",
        },
        {
          slot: "Grenade",
          displayName: "Cloudburst",
          description:
            "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/grenade/displayicon.png",
        },
        {
          slot: "Ultimate",
          displayName: "Blade Storm",
          description:
            "EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/ultimate/displayicon.png",
        },
        {
          slot: "Passive",
          displayName: "Drift",
          description:
            "Holding the jump button while falling allows you to glide through the air.",
          displayIcon:
            "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/abilities/passive/displayicon.png",
        },
      ],
    },
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
      <h1>Agents</h1>
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {data.slice(0, data.length).map((element, index) => {
          return (
            <NavLink key={index} to="detail" state={{ myState: element.uuid }}>
              <CustomCard>
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
              </CustomCard>
            </NavLink>
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
