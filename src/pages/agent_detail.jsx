import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { useLocation } from "react-router-dom";

export default function AgentDetail() {
  const location = useLocation();
  let uuid = location.state;
  console.log(uuid);

  return (
    <div className="container">
      <h1>Maps</h1>
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
            image="https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png"
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
              ISO
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
                  Initiator
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
              Đặc Vụ người Na-uy: Deadlock, sử dụng hàng loạt sợi dây nano tân
              tiến nhằm bảo vệ chiến trường khỏi những đợt công kích nguy hiểm
              nhất. Chẳng ai có thể thoát khỏi sự truy sát gắt gao, cũng như
              không thể sống sót trước sự hung dữ ngoan cường của cô ấy.
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
                title="EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown."
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png"
                  alt="Paella dish"
                />
              </Tooltip>
              <Tooltip
                title="EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown."
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png"
                  alt="Paella dish"
                />
              </Tooltip>
              <Tooltip
                title="EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown."
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png"
                  alt="Paella dish"
                />
              </Tooltip>
              <Tooltip
                title="EQUIP Wingman. FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees. ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule. INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown."
                arrow
              >
                <CardMedia
                  sx={{ width: "50px" }}
                  component="img"
                  height="50"
                  image="https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png"
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
