import React, { useEffect } from "react";

function Gang() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "exchange",
      theme: "dark",
      backgroundColor: "rgba(0, 0, 0, 1)",
      style: "1",
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      save_image: false,
      locale: "en",
      watchlist: ["AAPL", "IBM", "TSLA", "AMD", "MSFT", "GOOG"],
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    container.appendChild(script);

    // Listen for changes (example: symbol change via widget UI)
    const handleSymbolChange = (symbol) => {
      console.log("Symbol changed:", symbol);
      saveToLocalStorage("symbol", symbol);
    };

    // Simulate a symbol change listener (TradingView widgets don't expose events)
    const simulatedSymbolChange = () => {
      const newSymbol = "NASDAQ:TSLA"; // Simulate a symbol change
      handleSymbolChange(newSymbol);
    };

    // Simulate a change after 5 seconds
    setTimeout(simulatedSymbolChange, 5000);
  }, []);

  const saveToLocalStorage = (key, value) => {
    // Save data to localStorage
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`${key} saved to localStorage:`, value);
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <div
        className="tradingview-widget-container"
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          overflow: "hidden",
        }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "100%", width: "100%" }}
        ></div>
      </div>
    </div>
  );
}

export default Gang;
