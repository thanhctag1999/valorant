import axios from "axios";

const getAgents = async () => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/agents`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};
const getAgentDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://valorant-api.com/v1/agents/` + id
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
};

const AgentService = {
  getAgents,
  getAgentDetail,
};

export default AgentService;
