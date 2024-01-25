import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { React, useEffect, useState } from "react";
import AgentService from "../../apis/AgentService";
import { useParams } from "react-router-dom";
import "../../App.scss";

export default function AgentDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { uuid } = useParams();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const fetchAgentDetail = async () => {
      try {
        const results = await AgentService.getAgentDetail(uuid);

        if (isMounted) {
          setData(results.data);
        }
      } catch (error) {
        console.error("Error fetching agent details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAgentDetail();

    return () => {
      isMounted = false; // Cleanup to prevent setting state on an unmounted component
    };
  }, [uuid]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Agent Details</h1>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="start"
      >
        <Card sx={{ width: "60%", backgroundColor: "transparent" }}>
          <CardMedia
            sx={{}}
            component="img"
            image={data.fullPortrait}
            alt="Paella dish"
          />
        </Card>
        <Card sx={{ width: "40%", backgroundColor: "#303030b8" }}>
          <CardContent>
            <Typography
              sx={{ color: "white" }}
              variant="h4"
              color="text.primary"
            >
              {data.displayName}
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="h4"
              color="text.primary"
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="start"
                alignItems="center"
              >
                <Typography
                  sx={{ color: "white" }}
                  variant="body1"
                  color="text.primary"
                >
                  {data?.role?.displayName}
                </Typography>

                <CardMedia
                  sx={{ width: "25px" }}
                  component="img"
                  height="25"
                  image="https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png"
                  alt="Paella dish"
                />
              </Stack>
            </Typography>
            <br />
            <Typography
              sx={{ color: "white" }}
              variant="h6"
              color="text.primary"
            >
              Tiểu sử
            </Typography>
            <Typography
              sx={{ color: "white" }}
              variant="body2"
              color="text.secondary"
            >
              {data.description}
            </Typography>
            <br />
            <Typography
              sx={{ color: "white" }}
              variant="h6"
              color="text.primary"
            >
              Kỹ năng
            </Typography>
            <br />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Tooltip
                title={
                  data?.abilities != null ? data?.abilities[0]?.description : ""
                }
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image={
                    data?.abilities != null
                      ? data?.abilities[0]?.displayIcon
                      : ""
                  }
                  alt="Paella dish"
                />
              </Tooltip>
              <Tooltip
                title={
                  data?.abilities != null ? data?.abilities[1]?.description : ""
                }
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image={
                    data?.abilities != null
                      ? data?.abilities[1]?.displayIcon
                      : ""
                  }
                  alt="Paella dish"
                />
              </Tooltip>
              <Tooltip
                title={
                  data?.abilities != null ? data?.abilities[2]?.description : ""
                }
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image={
                    data?.abilities != null
                      ? data?.abilities[2]?.displayIcon
                      : ""
                  }
                  alt="Paella dish"
                />
              </Tooltip>
              <Tooltip
                title={
                  data?.abilities != null ? data?.abilities[3]?.description : ""
                }
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image={
                    data?.abilities != null
                      ? data?.abilities[3]?.displayIcon
                      : ""
                  }
                  alt="Paella dish"
                />
              </Tooltip>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
}
