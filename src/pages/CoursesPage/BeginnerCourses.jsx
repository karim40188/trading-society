import { useState } from "react";
import { Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import VideoModal from "./VideoModal";


export default function BeginnerCourses() {

    const beginnerVideos = [
        {
          title: "MT5 on Mobile",
          id: "2fc8e44c-1dcd-41ef-b3b0-5fded088b985",
        },
        {
          title: "Introduction to Forex",
          id: "8d671179-11f8-4f1c-982e-3ad8469bc8bb",
        },
        {
          title: "MT5 on PC",
          id: "a89cb27c-d8f0-413e-a79e-54ad67b92724",
        },
        {
          title: "How to Copy a Signal",
          id: "2fc8e44c-1dcd-41ef-b3b0-5fded088b985", // مكرر نفس الـ ID بتاع أول واحد
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
                {beginnerVideos.map(({ title, id }) => (
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
