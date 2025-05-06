import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const videoList = [
  {
    name: "Session number (1) Forex from scratch",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/c6d5ad81-e3f9-4b4e-884a-2e5c668afd68/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/c6d5ad81-e3f9-4b4e-884a-2e5c668afd68?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "An introduction to Forex trading.",
  },
  {
    name: "Session number (2) Forex from scratch",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/7464f17e-da6f-4204-a795-58e668333cfe/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/809fc861-71d3-45ee-b4d1-ff88575b110b?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Forex trading for beginners.",
  },
  {
    name: "Session number (3) MT5 mobile",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/2de1a3bb-492c-48f7-9508-2938c19c27ec/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/2de1a3bb-492c-48f7-9508-2938c19c27ec?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "MT5 for mobile devices.",
  },
  {
    name: "Session number (4) MT5 Desktop",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/809fc861-71d3-45ee-b4d1-ff88575b110b/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/809fc861-71d3-45ee-b4d1-ff88575b110b?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Learn about MT5 Desktop.",
  },
  {
    name: "Session number (5) How to copy signal",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/93107332-5790-482c-b9e9-9dda745602e1/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/93107332-5790-482c-b9e9-9dda745602e1?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Learn how to copy trading signals.",
  },
  {
    name: "Session number (6) Orders types",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/9bcabb14-e75c-4f91-a2ad-2d9c64d823fa/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/9bcabb14-e75c-4f91-a2ad-2d9c64d823fa?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Understanding different order types in trading.",
  },
  {
    name: "Session number (7) How to read signals from chart",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/abfac6f5-dca0-496a-b319-d14d58bc0856/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/abfac6f5-dca0-496a-b319-d14d58bc0856?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Learn how to interpret trading signals from charts.",
  },
  {
    name: "Session number (8) What pip means",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/16692382-6487-4f46-a145-f6932e5ecbec/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/16692382-6487-4f46-a145-f6932e5ecbec?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "What is a pip in trading?",
  },
  {
    name: "Session number (9) What lot size means",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/4fe14bf5-8e6a-41f6-8390-12fcf25ef25e/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/4fe14bf5-8e6a-41f6-8390-12fcf25ef25e?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Understanding lot size in trading.",
  },
  {
    name: "Session 10 PIP Value",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/288063a9-01dc-4d43-9c1e-4ba619b13cc3/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/288063a9-01dc-4d43-9c1e-4ba619b13cc3?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Learn about pip value and its importance.",
  },
  {
    name: "Session 11 Risk Management",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/b2cb0aaf-9029-4106-9a75-cb03667aa272/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/b2cb0aaf-9029-4106-9a75-cb03667aa272?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Master risk management strategies in trading.",
  },
  {
    name: "Session 12 What broker means",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/417b8d72-ae8a-4057-bbbc-35e949cac52f/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/417b8d72-ae8a-4057-bbbc-35e949cac52f?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "What is a broker in trading?",
  },
  {
    name: "Session 13 Brokers types",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/95de02c3-5728-41e4-8e2c-1b1489561c40/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/95de02c3-5728-41e4-8e2c-1b1489561c40?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Different types of brokers and their roles.",
  },
  {
    name: "Session 14 Common mistakes (Trader Psychology)",
    image: "https://vz-f1c9d2d2-359.b-cdn.net/a18f57b1-0f91-4e8d-8f6c-01fe2f18a253/thumbnail.jpg",
    video: "https://iframe.mediadelivery.net/embed/366951/a18f57b1-0f91-4e8d-8f6c-01fe2f18a253?autoplay=true&loop=false&muted=false&preload=true&responsive=true",
    description: "Avoid common trading mistakes and improve your psychology.",
  },
  // Add more sessions as needed
];

const LiveVideoCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "24px", md: "33px" },
            my: "30px",
            color: "#fff",
            position: "relative",
            "&::after": {
              content: "''",
              position: "absolute",
              backgroundColor: "#ecbc56",
              left: "0",
              top: "100%",
              width: "100%",
              height: "3px",
            },
          }}
        >
          Live{" "}
          <Typography component="span" sx={{ color: "#ECBC56" }}>
            Sessions
          </Typography>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1em",
        }}
      >
        {videoList.map((video, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              borderRadius: "15px",
              backgroundColor: "#2B2B2B",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              maxWidth: "380px",
              minWidth: "300px",
              overflow: "hidden",
              cursor: "pointer",
              p: "10px",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 0 80px 1px rgba(236, 188, 86, 1)",
              },
            }}
            onClick={() => navigate(`/recorded-session/${index}`, { state: { video } })}
          >
            <Box
              component="img"
              src={video.image}
              alt={video.name}
              sx={{
                display: "block",
                width: "100%",
                height: "200px",
                borderRadius: "15px",
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                color: "#ECBC56",
                mt: 2,
                fontSize: "18px",
                textAlign: "center",
              }}
            >
              {video.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default LiveVideoCard;
