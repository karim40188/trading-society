import React from "react";
import { useParams } from "react-router-dom";
// import VideoController from "@/components/VideoController/index.jsx";
import VideoController from "@/components/VideoController/index.jsx";


const WithVPRecorded = () => {
  const { videoUrl } = useParams(); // Get video URL from route params
  const decodedUrl = decodeURIComponent(videoUrl); // Decode the URL

  return <VideoController src={decodedUrl} />; // Pass the decoded URL to the VideoController
};

export default WithVPRecorded;
