# StockTicker
This repository contains a simple stock lookup application created during the Data Communication course at Virginia Commonwealth University. The application allows users to input a U.S. stock ticker and retrieve the current stock price using the Finnhub API.

Project Overview

The project is divided into two main components:

1. Frontend: A simple HTML page with JavaScript for user interaction.

2. Backend: A Node.js server using the Express framework to process API requests and fetch stock data.
Features

Stock Input: Users can enter a valid U.S. stock ticker symbol.

Error Handling: Provides user feedback for invalid input, including:
Missing stock ticker.

Invalid characters (e.g., numbers in the ticker).

Case-sensitivity errors (tickers must be in uppercase).

Finnhub API Integration: Fetches real-time stock price data.

File Structure

StockHTML.html:
Contains the HTML structure and JavaScript for the frontend.
Provides a simple interface for entering a stock ticker and viewing results.

StockJS.js:
Backend code using Node.js and Express.
Implements routes to handle requests and fetch data from the Finnhub API.

How to Run the Application

Prerequisites
Node.js installed on your machine.
A valid Finnhub API key.

Setup Instructions
Clone this repository to your local machine:


git clone https://github.com/JelaniAHoward/StockTicker.git

cd stock-lookup



Install the required Node.js dependencies:

npm install express cors finnhub
Replace the placeholder API key in StockJS.js with your Finnhub API key:

api_key.apiKey = "your_api_key_here";

Start the backend server:
node StockJS.js

Open the StockHTML.html file in your browser.

Enter a stock ticker in the input field and click "Click Me" to fetch the stock price.

Example Usage
Input: AAPL (Apple Inc.)
Output: Symbol: AAPL | Current Price: $150.00 (Price will vary based on real-time data).

Dependencies
Frontend: HTML, JavaScript (Vanilla)
Backend:
Node.js
Express
Finnhub API
