import React, { useState } from "react";

const Farmers = () => {
  const [temperature, setTemperature] = useState(null);
  const [season, setSeason] = useState(null);
  const [crops, setCrops] = useState(null);
  const [watering, setWatering] = useState(null);
  const [additionalTips, setAdditionalTips] = useState(null);

  const fetchTemperature = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      );
      const data = await response.json();
      const kelvinTemp = data.main.temp;
      const celsiusTemp = kelvinToCelsius(kelvinTemp);
      setTemperature(celsiusTemp);
      setSeason(getSeason(celsiusTemp));
      setCropSuggestions(celsiusTemp);
    } catch (error) {
      console.error("Error fetching temperature:", error);
    }
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const getSeason = (temperature) => {
    if (temperature >= 5 && temperature < 15) return "Cool Season";
    else if (temperature >= 15 && temperature < 25) return "Moderate Season";
    else if (temperature >= 25 && temperature < 35) return "Warm Season";
    else if (temperature >= 35) return "Hot Season";
    else return "Temperature not in defined range";
  };

  const setCropSuggestions = (temperature) => {
    if (temperature >= 5 && temperature < 15) {
      setCrops(
        "Crops: Spinach, Lettuce, Kale, Peas, Carrots, Radishes, Broccoli, Cauliflower"
      );
      setWatering(
        "Watering: Once a day, preferably in the morning. Adjust based on soil moisture levels."
      );
      setAdditionalTips(
        "Additional Tips: Use row covers to protect against frost. Ensure well-draining soil to prevent root rot."
      );
    } else if (temperature >= 15 && temperature < 25) {
      setCrops(
        "Crops: Tomatoes, Peppers, Beans, Cucumbers, Squash, Corn, Eggplant"
      );
      setWatering(
        "Watering: Twice a day, early morning and late afternoon. Ensure consistent soil moisture."
      );
      setAdditionalTips(
        "Additional Tips: Mulch to retain moisture and control weeds. Regularly check for pests."
      );
    } else if (temperature >= 25 && temperature < 35) {
      setCrops(
        "Crops: Okra, Sweet Potatoes, Melons, Pumpkins, Sunflowers, Sorghum"
      );
      setWatering(
        "Watering: Two to three times a day to prevent heat stress. Drip irrigation is effective."
      );
      setAdditionalTips(
        "Additional Tips: Use shade cloths to protect young plants from extreme heat. Consider drought-resistant varieties."
      );
    } else if (temperature >= 35) {
      setCrops("Crops: Cacti, Agave, Tepary Beans, Millet");
      setWatering(
        "Watering: Multiple times a day, small amounts each time. Focus on early morning and late evening."
      );
      setAdditionalTips(
        "Additional Tips: Ensure good mulching to conserve water. Choose heat-tolerant varieties and practice xeriscaping."
      );
    } else {
      setCrops(null);
      setWatering(null);
      setAdditionalTips(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    fetchTemperature(city);
  };

  return (
    <div>
      <div style={{ backgroundColor: "lightcyan", padding: "20px" }}>
        <center>
          <div style={{ fontSize: "24px", marginBottom: "20px" }}>
            Take Crop Suggestions Based on Temperature...
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="city"
              placeholder="Enter City Name..."
              style={{ width: "300px", padding: "10px", background: "white" }}
              className="form-control"
            />
            <br />
            <input
              type="submit"
              value="Get Temperature"
              style={{ fontSize: "18px", marginTop: "10px" }}
              className="btn btn-primary"
            />
          </form>
          {temperature !== null && (
            <p style={{ fontSize: "4vh", marginTop: "20px" }}>
              <b>Temperature:</b> {Math.round(temperature)}°C
            </p>
          )}
        </center>
      </div>
      {temperature !== null && (
        <div>
          <p style={{ fontSize: "4vh", padding: "2vh 0 0 2vh" }}>
            Suggestions for the Farmers Based on the Temperature...
          </p>
          <ul>
            {season && <li style={{ fontSize: "20px" }}>Season: {season}</li>}
            {crops && <li style={{ fontSize: "20px" }}>{crops}</li>}
            {watering && <li style={{ fontSize: "20px" }}>{watering}</li>}
            {additionalTips && (
              <li style={{ fontSize: "20px" }}>{additionalTips}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Farmers;
