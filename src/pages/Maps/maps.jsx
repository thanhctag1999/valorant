import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const data = [
  {
    uuid: 1,
    displayName: "Ascent",
    narrativeDescription:
      "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.",
    tacticalDescription: "A/B Sites",
    splash:
      "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
  },
  {
    uuid: 2,
    displayName: "Split",
    narrativeDescription:
      "If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.",
    tacticalDescription: "A/B Sites",
    splash:
      "https://media.valorant-api.com/maps/d960549e-485c-e861-8d71-aa9d1aed12a2/splash.png",
  },
  {
    uuid: 3,
    displayName: "Fracture",
    narrativeDescription:
      "A top secret research facility split apart by a failed radianite experiment. With defender options as divided as the map, the choice is yours: meet the attackers on their own turf or batten down the hatches to weather the assault.",
    tacticalDescription: "A/B Sites",
    splash:
      "https://media.valorant-api.com/maps/b529448b-4d60-346e-e89e-00a4c527a405/splash.png",
  },
  {
    uuid: 4,
    displayName: "Bind",
    narrativeDescription:
      "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank",
    tacticalDescription: "A/B Sites",
    splash:
      "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png",
  },
];
const Maps = () => {
  return (
    <div className="container">
      <h1>Maps</h1>
      <div className="maps-container">
        <Carousel
          autoPlay={true}
          centerMode={true}
          dynamicHeight={true}
          infiniteLoop={true}
          swipeable={true}
        >
          {data.map((element, index) => {
            return (
              <div key={index}>
                <img src={element.splash} />
                <div>{element.narrativeDescription}</div>
                <h5 className="legend">{element.displayName}</h5>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Maps;
