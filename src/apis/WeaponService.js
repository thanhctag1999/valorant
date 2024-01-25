import axios from "axios";

const getWeapons = async () => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/weapons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};

const WeaponService = {
  getWeapons,
};

export default WeaponService;
