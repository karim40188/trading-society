import React, { useRef, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const newsItems = [
"Hello Society 👋",
"📢Disclaimer: All content and information provided on this website are for educational and informational purposes only, specifically relating to trading in financial markets. They should not be construed as specific investment recommendations, endorsements, or solicitations to buy or sell securities or any other investment instruments. It’s emphasized that trading in financial markets carries inherent risks, and potential traders are advised not to invest more than they can afford to lose. Trading society does not provide direct broker services, trading services, or hold custody of any investor funds. The Company is also not a licensed investment service provider and does not offer any services that would fall under such categorization. Any references to “trading” or “trader” on our platform should be understood as notional or fictitious trading on demo accounts. This website is operated under the jurisdiction of IFZA . Trading society assumes no responsibility or liability for any misinterpretation, misuse, or reliance on the information provided on this website. Trading FOREX involves substantial risk of loss and is not suitable for all investors. Opinions, market data, and recommendations are subject to change without notice. Past performance is not indicative of future results. 🙏✨",
];

const NewsBar = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;
    const scrollSpeed = 1.5; // Adjust for scrolling speed

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
    }, 50);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
        border: "2px solid #ecbc56",
        borderRadius: "8px",
        backgroundColor: "#2B2B2B",
        position: "relative",
        width: "100%",
        height: "50px",
        alignItems: "center",
      }}
    >
      {newsItems.map((item, index) => (
        <Typography
          key={index}
          sx={{
            display: "inline-block",
            color: "#fff",
            px: "20px",
            fontSize: "30px",
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default NewsBar;
