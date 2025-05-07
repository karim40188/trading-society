// ✅ 5. BasicsCourses.jsx
import { useState } from "react";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import VideoModal from "./VideoModal";

export default function BasicsCourses() {


  const basicsVideos = [
    {
      title: "Common Mistakes in Trading",
      id: "7f5058ec-b15d-43a7-b78c-59c28227df89",
    },
    {
      title: "How to Copy Signals from a Chart",
      id: "d8534d79-c2dc-47fc-b6c0-58c6f5fc90e8",
    },
    {
      title: "Types of Orders",
      id: "dc42d388-ed1f-497c-b30b-00f394e0dae4",
    },
    {
      title: "What is Pip Value?",
      id: "77a939a4-a235-4077-aca2-e2b8648e9e83",
    },
    {
      title: "What are Pips?",
      id: "5e6e7ee6-0551-478b-96e3-3477ed158259",
    },
    {
      title: "Risk Management",
      id: "9820805b-4a0e-4ca3-8c7a-83224f1b2158",
    },
    {
      title: "What Does Lot Size Mean?",
      id: "6d536d79-3069-4690-8cdf-7f92bbee9b03",
    },
  ];
  
  
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
        {basicsVideos.map(({ title, id }) => (
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