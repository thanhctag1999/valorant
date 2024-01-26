import axios from "axios";

const getMaps = async () => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/maps`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};

const MapService = {
  getMaps,
};

export default MapService;
