import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MapService from "../../apis/MapService";

const Maps = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const results = await MapService.getMaps();
        const filteredMaps = results.data.filter(
          (element) => element.fullPortrait !== null
        );
        setData(filteredMaps);
      } catch (error) {
        console.error("Error fetching maps:", error);
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
                <h5 className="map-name">{element.displayName}</h5>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Maps;
