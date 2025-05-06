import React from "react";
import { Box } from "@mui/material";
import profileBanner from "@/assets/images/home/bannerCroped.jpg";
import NewsBar from "./NewsBar.jsx";
function BannerProfile() {
  return (
    <Box sx={{width:"100%",height:"100%", display:"flex",flexDirection:"column",alignItems:"space-between",gap:"20px"}}>
            <a
      href="https://banner-api.hfm.com/link/4a9ff55e?regulator=HFSV&refid=30432124"
      target="_blank"
      style={{ display: "block" }}
    >
      <img style={{ display: "block", width: "100%", height: "50%",borderRadius:"15px" }} src={profileBanner} />
    </a>
    
    <NewsBar/>
    </Box>

  );
}

export default BannerProfile;
