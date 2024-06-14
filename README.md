# Weather Application

This Weather Application is built using ReactJS and the OpenWeatherMap API. The application fetches the temperature based on the city name and displays it on the UI. It is designed to be useful for various user groups such as farmers, event planners, travelers, and individuals who want to know the temperature of a specific city. The application also includes a personal experience section where the developer shares their experience with the weather.

## Features of the Application

### General

- Fetches and displays temperature for a specific city using the OpenWeatherMap API.
- Provides tailored suggestions and information for different user groups.
- Navigation achieved using React-Router-Dom version 6.

### Navigation Bar

The navigation bar contains the following routes:

1. **Home**
2. **My Personal Experience**
3. **Event Planners**
4. **Farmers**
5. **Travellers**

### Route Descriptions

1. **Home**  
   ![Weather App Screenshot](https://drive.google.com/thumbnail?id=11mNS6TFFqoWh7epGNnXhmNJmWAMS7rhF)

   - Contains a search box and a 'Find Temperature' button.
   - Allows users to enter a city name and fetch the temperature for that city.
   - Displays temperatures of some additional cities below the search box.

2. **My Personal Experience**  
   ![Weather App Screenshot](https://drive.google.com/thumbnail?id=1c0qrTmmIbrIG5nLwBS-nWdzXsTX-fy8y)

   - Contains a section where the developer shares their personal experience with the weather, specifically during rainy climates.

3. **Event Planners**  
   ![Weather App Screenshot](https://drive.google.com/thumbnail?id=1Q_KAk4SQH0rUPNjrI5R4f3yubkAyymq_)

   - Contains a search box for entering a city name.
   - Upon clicking the button, the temperature of the specified city is displayed.
   - Provides a suggestion on whether to plan an event based on the current temperature.

4. **Farmers**  
   ![Weather App Screenshot](https://drive.google.com/thumbnail?id=1wxdOdxw41qWVqY6GgNHc6Zhu8uy8d4Kw)

   - Contains a search box for entering a city name.
   - Upon clicking the button, the temperature of the specified city is displayed.
   - Provides suggestions on which crops to grow and precautions to take based on the temperature.

5. **Travellers**  
   ![Weather App Screenshot](https://drive.google.com/thumbnail?id=1_bnrDmEKiali7bY8zMYW4GvZ1FRXuT2B)
   - Contains a search box for entering a destination city name.
   - Upon clicking the button, the temperature of the specified city is displayed.
   - Provides travel safety suggestions based on the current temperature.
