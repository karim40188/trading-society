import { useParams } from "react-router-dom";
import VideoController from "@/Components/VideoController/index.jsx";
import { useEffect, useState } from "react";

const CustomVideoPlayer = () => {
  let { videoUrl } = useParams();
  let decodedUrl = decodeURIComponent(videoUrl);

  const [src, setSrc] = useState("");
  const [useIframe, setUseIframe] = useState(true);

  useEffect(() => {
    // تحديث مصدر الفيديو عند تغيير الـ URL
    updateVideoSource(decodedUrl);
  }, [decodedUrl]); // إضافة decodedUrl كإعتماد للتحديث عند تغييره

  const updateVideoSource = (url) => {
    switch (url) {
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BEGINNER/MT5_mob.mp4":
        setSrc(
            "https://iframe.mediadelivery.net/embed/366951/2fc8e44c-1dcd-41ef-b3b0-5fded088b985?autoplay=true&loop=false&muted=false&preload=true&responsive=true"     
        );   
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BEGINNER/forex_introduction.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/8d671179-11f8-4f1c-982e-3ad8469bc8bb?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BEGINNER/MT5_pc.mp4":
        setSrc(
            "https://iframe.mediadelivery.net/embed/366951/a89cb27c-d8f0-413e-a79e-54ad67b92724?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BEGINNER/How_to_copy_signal.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/2fc8e44c-1dcd-41ef-b3b0-5fded088b985?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      // Basics
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/common_mistake.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/7f5058ec-b15d-43a7-b78c-59c28227df89?autoplay=true&loop=false&muted=false&preload=true&responsive=true"          
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/how_to_copy_signals_from_chart.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/d8534d79-c2dc-47fc-b6c0-58c6f5fc90e8?autoplay=true&loop=false&muted=false&preload=true&responsive=true"          
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/orders_types.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/dc42d388-ed1f-497c-b30b-00f394e0dae4?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/pip_value.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/77a939a4-a235-4077-aca2-e2b8648e9e83?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/pips.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/5e6e7ee6-0551-478b-96e3-3477ed158259?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/Risk_mangemant.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/9820805b-4a0e-4ca3-8c7a-83224f1b2158?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/BASICS/What_lot_size_means.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/6d536d79-3069-4690-8cdf-7f92bbee9b03?autoplay=true&loop=false&muted=false&preload=true&responsive=true" 
        );
        break;
      // Advanced
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/candlestick.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/4b0ef067-31aa-4120-9819-90956f83e22d?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/ema_moving_average.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/44c10b6f-718f-468b-a415-848b47d3bbdd?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/price_channels.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/cefeb5d9-aa85-423a-a323-094c1c7093ca?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/rsi.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/e70b65aa-0114-460e-8a40-ac55533ec03a?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/support_&_resistanc.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/c5b8b252-ceb1-446f-8797-1308c726c1ff?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/trends.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/4bce0c2d-5d75-4f81-b7dc-db956e655315?autoplay=true&loop=false&muted=false&preload=true&responsive=true"              
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/اشكال_الشموع.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/c6ec0348-b972-4232-9dee-b795a24eb59a?autoplay=true&loop=false&muted=false&preload=true&responsive=true"              
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/التحليل_الفني.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/b5bf8feb-b07d-43a3-86c4-b69341594d5b?autoplay=true&loop=false&muted=false&preload=true&responsive=true"             
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/المؤشرات.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/738331b1-d012-485f-ad19-476b82ede0f4?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      case "https://laravelapi.tradingsociety.net//uploads/vedios/courses_videos/FAWZI/advanced/نفسية_المتداول.mp4":
        setSrc(
          "https://iframe.mediadelivery.net/embed/366951/c99cc929-cd89-4b86-a849-030b584923c7?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        );
        break;
      default:
        // في حالة عدم العثور على الفيديو في القائمة
        if (url.endsWith('.mp4')) {
          // إذا كان الرابط ينتهي بـ mp4، استخدم VideoController
          setSrc(url);
          setUseIframe(false);
        } else {
          // استخدم الفيديو الافتراضي في iframe
          setSrc(
            "https://iframe.mediadelivery.net/embed/366951/6c4d9094-3af7-4473-88de-efc065aaea02?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
          );
        }
        break;
    }
  };

  // عرض iframe أو VideoController حسب نوع الرابط
  return useIframe ? (
    <iframe
      src={src}
      style={{
        border: 0,
        height: "100dvh",
        width: "100%",
        maxWidth: "100%",
      }}
      allowFullScreen={true}
      allow="encrypted-media"
    ></iframe>
  ) : (
    <VideoController src={src} />
  );
};

export default CustomVideoPlayer;