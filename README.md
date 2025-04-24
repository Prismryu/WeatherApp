# WeatherApp

Description

The Weather App is a full-stack application that allows users to search for the current and 5-day weather forecast for cities using the OpenWeatherMap API. The application also saves search history and allows users to delete individual entries. The backend is built with Express and Node.js, while the frontend is powered by Vite and deployed for a smooth user experience. This project demonstrates the use of third-party APIs, server-side routing, middleware, and environment configuration for secure API key handling.
Table of Contents

    Installation

    Usage

    License

    Contributing

    Tests

    Questions

Installation

    Clone the repository:

git clone https://github.com/Prismryu/weather-dashboard.git

Navigate to the root directory and install dependencies:

npm install

Install server-side dependencies:

cd server
npm install

Add your OpenWeatherMap API key in a .env file in the server folder:

OPENWEATHER_API_KEY=your_api_key_here

Run the development server:

    npm run start

Usage

    Navigate to the homepage where you can enter a city name.

    View the current weather and a 5-day forecast.

    Previously searched cities are saved in the sidebar.

    Click a city in the history list to view the weather again.

    Optionally delete cities from the history.

License

This application is covered under the MIT license.
Contributing

For contributions, contact user Prismryu.
Tests

There are currently no automated tests written for this application. Manual testing can be performed by:

    Entering valid and invalid city names

    Checking network responses in the browser dev tools

    Testing delete functionality on search history

https://weatherapp-bp39.onrender.com

Questions

If you have any questions, feel free to reach out:

    GitHub: Prismryu

    Email: Guyrunby@gmail.com
