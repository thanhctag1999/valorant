import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

export default function WeaponsCard({ id, name, image }) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 3,
          padding: "5px",
          background: "linear-gradient(to top, #fff, transparent)",
          border: "3px solid grey",
          cursor: "pointer",
          transition: "border-color 0.3s, background 0.3s",
          "&:hover": {
            borderColor: "#fb023c",
            background: "linear-gradient(to top, #fb023c, transparent)",
            ".card-media": {
              opacity: 0,
              height: 0,
              transition: "opacity 0.3s ease-in-out, height 0.3s ease-in-out",
            },
            ".card-content": {
              opacity: 1,
              height: 150,
              transform: "translateX(10px)", // Adjust the value as needed
              transition:
                "opacity 0.5s ease-in-out, height 0.5s ease-in-out, transform 0.5s ease-in-out",
            },
          },
        }}
      >
        <CardMedia
          className="card-media"
          sx={{
            height: 150,
            backgroundSize: "contain",
            margin: "15px",
            cursor: "pointer",
            opacity: 1,
            transition: "opacity 0.3s ease-in-out",
            "&:hover": {
              opacity: 0,
            },
          }}
          image={image}
          title="Gun"
        />
        <CardContent
          className="card-content"
          sx={{
            opacity: 0,
            height: 0,
          }}
        >
          <Typography gutterBottom variant="h4" component="b" color="white">
            {name}
          </Typography>
          <Typography variant="body2" color="white">
            Một vũ khí đa năng có lực sát thương, tốc độ bắn và độ chính xác cao
            ở tầm gần và tầm trung. Với khẩu súng này, bạn sẽ dễ dàng hạ gục đối
            thủ ở mọi ngóc ngách của bản đồ, và thậm chí có thể hạ gục kẻ thù ở
            khoảng cách xa nếu có kỹ năng ngắm ổn định.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
