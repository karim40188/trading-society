import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Logo from "../../../assets/images/home/logo.png";

const TradingViewWidget = ({ symbol, width = 350, colorTheme = "dark" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!symbol) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      width: "100%",
      isTransparent: true,
      colorTheme,
      locale: "en",
    });

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      containerRef.current.appendChild(script);
    }
  }, [symbol, width, colorTheme]);

  return (
    <Box
      sx={{
        width: "60%",
        height: "10%",
        position: "relative",
        userSelect: "none", // Prevents text selection
      }}
    >
      <div className="tradingview-widget-container"  style={{ pointerEvents: "none" }} ref={containerRef}>
        <div
          className="tradingview-widget-container__widget"
          style={{ pointerEvents: "none" }} // Disable all interaction with the widget
        ></div>
        <div className="tradingview-widget-copyright"></div>
      </div>
    </Box>
  );
};

export default TradingViewWidget;
