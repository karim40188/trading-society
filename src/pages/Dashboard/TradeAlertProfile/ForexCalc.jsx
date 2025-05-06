import React, { useState } from 'react';
import axios from 'axios';

const ForexRiskCalculator = () => {
  const [balance, setBalance] = useState(10000); // Example balance
  const [currencyPair, setCurrencyPair] = useState('EUR/USD');
  const [entryPrice, setEntryPrice] = useState(1.2000); // Example entry price
  const [stopLoss, setStopLoss] = useState(1.1900); // Example stop loss
  const [riskPercentage, setRiskPercentage] = useState(1); // Example risk percentage
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Your secret key (replace with your actual API key)
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY
  // Calculate the risk and position size
  const calculateRisk = () => {
    const riskAmount = (balance * riskPercentage) / 100;
    const stopLossPips = Math.abs(entryPrice - stopLoss) * 10000; // Convert to pips for most pairs
    const positionSize = riskAmount / stopLossPips;
    return { riskAmount, positionSize };
  };

  // Retry mechanism for API requests
  const fetchWithRetry = async (url, options, retries = 3, delay = 1000) => {
    try {
      const response = await axios.post(url, options);
      return response;
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        console.log('Rate limit hit, retrying...');
        // Wait before retrying
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2); // Exponential backoff
      } else {
        throw error; // Throw the error if it's not a 429 or no retries left
      }
    }
  };

  // Submit the form and call the OpenAI API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Get the calculated risk
    const { riskAmount, positionSize } = calculateRisk();

    // Prepare the prompt for ChatGPT
    const userPrompt = `I want to calculate my Forex trade risk for the currency pair: ${currencyPair}. 
      Entry price: ${entryPrice}, Stop loss: ${stopLoss}, My balance: ${balance}, Risk percentage: ${riskPercentage}.`;

    try {
      const response = await fetchWithRetry(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // Ensure you're using the correct model here
          messages: [
            { role: 'system', content: 'You are a financial advisor helping with Forex risk management calculations.' },
            { role: 'user', content: userPrompt },
          ],
          max_tokens: 150,
        },
        3, // Retry up to 3 times
        1000, // Start with 1-second delay
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Log the response to the console
      console.log('API Response:', response.data);

      // Set the result from ChatGPT API (optional)
      setResult({
        ...calculateRisk(),
        chatGPTResponse: response.data.choices[0].message.content,
      });
    } catch (error) {
      console.error('Error with API request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Forex Risk Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Balance:</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Currency Pair:</label>
          <input
            type="text"
            value={currencyPair}
            onChange={(e) => setCurrencyPair(e.target.value)}
          />
        </div>
        <div>
          <label>Entry Price:</label>
          <input
            type="number"
            step="0.0001"
            value={entryPrice}
            onChange={(e) => setEntryPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Stop Loss:</label>
          <input
            type="number"
            step="0.0001"
            value={stopLoss}
            onChange={(e) => setStopLoss(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Risk Percentage:</label>
          <input
            type="number"
            value={riskPercentage}
            onChange={(e) => setRiskPercentage(Number(e.target.value))}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Calculating...' : 'Calculate Risk'}
        </button>
      </form>

      {result && (
        <div>
          <h2>Calculated Risk</h2>
          <p>Risk Amount: {result.riskAmount}</p>
          <p>Position Size: {result.positionSize}</p>
          <h3>ChatGPT Response:</h3>
          <p>{result.chatGPTResponse}</p>
        </div>
      )}
    </div>
  );
};

export default ForexRiskCalculator;
