import axios from "axios";

const getPlayerCards = async () => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/playercards`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player cards:", error);
    throw error;
  }
};

const PlayerCardService = {
  getPlayerCards,
};

export default PlayerCardService;
