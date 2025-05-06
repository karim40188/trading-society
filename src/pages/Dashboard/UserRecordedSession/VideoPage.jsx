import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const VideoPage = () => {
  const location = useLocation();
  const { video } = location.state || {};

  if (!video) {
    return <Typography>Video not found</Typography>;
  }

  return (
    <Box sx={{ textAlign: "center", padding: "20px", }}>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%",height: "100vh" }}>
        <iframe
          src={video.video}
          width="100%"
          height="100%"
          
          allowFullScreen
          style={{ border: "none", borderRadius: "15px",boxShadow: "0 0px 50px rgba(255, 255, 255, 0.2)" }}
        ></iframe>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start"}}>
      <Typography sx={{ marginTop: "20px", fontSize: "30px", fontWeight: "bold" }}> {video.name}      </Typography>
      <Typography sx={{ marginTop: "20px" }}>{video.description}</Typography>
      </Box>
    </Box>
  );
};

export default VideoPage;
