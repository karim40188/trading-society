import { useParams } from "react-router-dom";
import VideoController from "@/Components/VideoController/index.jsx";

const WithVP = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);

  return <VideoController src={decodedUrl} />;
};

export default WithVP;
