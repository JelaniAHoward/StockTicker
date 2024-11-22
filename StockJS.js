// Backend code in Node.js using Express
const express = require('express');
const finnhub = require('finnhub');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 8080;

app.use(express.json());
const containsInteger = (str) => /\d/.test(str);
// Route for button click
app.post('/button-clicked', (req, res) => {
  

    const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    api_key.apiKey = "cslojp1r01qgp6njjmvgcslojp1r01qgp6njjn00"
    const finnhubClient = new finnhub.DefaultApi()

    const stockSymbol = req.body.symbol

    if (!stockSymbol) {
        console.log("Input: (empty) | Error: Stock ticker is required");
        return res.status(400).json({ error: "Stock ticker is required" });
    }

    // Check for integers in the stock ticker
    if (containsInteger(stockSymbol)) {
        console.log(`Input: ${stockSymbol} | Error: Stock ticker must not contain numbers`);
        return res.status(400).json({ error: "Stock ticker must not contain numbers" });
    }

    // Check if the stock ticker is not uppercase
    if (stockSymbol !== stockSymbol.toUpperCase()) {
        console.log(`Input: ${stockSymbol} | Error: Stock ticker must be in uppercase`);
        return res.status(400).json({ error: "Stock ticker must be in uppercase" });
    }

    finnhubClient.quote(stockSymbol, (error, data, response) => {
        console.log(data.c);
        if (error) {
            console.error(`Input: ${stockSymbol} | Error: Error fetching stock data`);
            res.status(500).send("Error fetching stock data");
          } 
          
          console.log(`Input: ${stockSymbol} | Symbol: ${stockSymbol} | Current Price: $${data.c}`);
            res.json({
              symbol: stockSymbol,
              currentPrice: data.c, // Current price
              
            });

        
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});