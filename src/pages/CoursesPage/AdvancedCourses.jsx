// AdvancedCourses.jsx
import { useState } from "react";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import VideoModal from "./VideoModal";
const advancedVideos = [
  {
    title: "Candlestick Patterns",
    id: "4b0ef067-31aa-4120-9819-90956f83e22d",
  },
  {
    title: "EMA Moving Average",
    id: "44c10b6f-718f-468b-a415-848b47d3bbdd",
  },
  {
    title: "Price Channels",
    id: "cefeb5d9-aa85-423a-a323-094c1c7093ca",
  },
  {
    title: "RSI (Relative Strength Index)",
    id: "e70b65aa-0114-460e-8a40-ac55533ec03a",
  },
  {
    title: "Support & Resistance",
    id: "c5b8b252-ceb1-446f-8797-1308c726c1ff",
  },
  {
    title: "Trends",
    id: "4bce0c2d-5d75-4f81-b7dc-db956e655315",
  },
  {
    title: "Candlestick Shapes",
    id: "c6ec0348-b972-4232-9dee-b795a24eb59a",
  },
  {
    title: "Technical Analysis",
    id: "b5bf8feb-b07d-43a3-86c4-b69341594d5b",
  },
  {
    title: "Indicators",
    id: "738331b1-d012-485f-ad19-476b82ede0f4",
  },
  {
    title: "Trader Psychology",
    id: "c99cc929-cd89-4b86-a849-030b584923c7",
  },
];


export default function AdvancedCourses() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  return (
    <>
      <Grid container spacing={4}>
        {advancedVideos.map(({ title, id }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "#fff" }}>
              <CardActionArea onClick={() => handleOpen(id)}>
                <CardContent>
                  <Typography variant="h6">{title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <VideoModal open={open} onClose={handleClose} videoId={selectedId} />
    </>
  );
}
