// src/components/CarbonFootprintCalculator.jsx
import React, { useState } from 'react';

const CarbonFootprintCalculator = () => {
  const [inputs, setInputs] = useState({
    distance: '',
    mode: 'car',
    electricity: '',
    gas: '',
    waste: '',
  });
  const [result, setResult] = useState(null);
  const [offsetSuggestions, setOffsetSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleCalculate = () => {
    const carbonPerMile = {
      car: 0.404,
      bus: 0.086,
      train: 0.045,
      airplane: 0.219,
    };
    
    const distanceFootprint = inputs.distance * carbonPerMile[inputs.mode];
    const electricityFootprint = inputs.electricity * 0.92; // kg CO2 per kWh
    const gasFootprint = inputs.gas * 5.3; // kg CO2 per therm
    const wasteFootprint = inputs.waste * 0.2; // kg CO2 per lb of waste

    const totalFootprint = distanceFootprint + electricityFootprint + gasFootprint + wasteFootprint;

    setResult(totalFootprint);
    setOffsetSuggestions([
      "Consider planting trees to offset your carbon footprint.",
      "Use public transport or carpool to reduce your travel emissions.",
      "Switch to renewable energy sources for your electricity needs.",
    ]);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-5 rounded shadow-md mt-5">
      <h2 className="text-2xl font-semibold mb-4">Carbon Footprint Calculator</h2>

      <div>
        <label htmlFor="distance" className="block mb-2">Distance traveled (in miles):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={inputs.distance}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="Enter distance in miles"
        />
      </div>

      <div className="my-4">
        <label htmlFor="mode" className="block mb-2">Mode of transportation:</label>
        <select
          id="mode"
          name="mode"
          value={inputs.mode}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
        >
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="airplane">Airplane</option>
        </select>
      </div>

      <div>
        <label htmlFor="electricity" className="block mb-2">Electricity usage (in kWh):</label>
        <input
          type="number"
          id="electricity"
          name="electricity"
          value={inputs.electricity}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="Enter electricity usage"
        />
      </div>

      <div>
        <label htmlFor="gas" className="block mb-2">Gas usage (in therms):</label>
        <input
          type="number"
          id="gas"
          name="gas"
          value={inputs.gas}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="Enter gas usage"
        />
      </div>

      <div>
        <label htmlFor="waste" className="block mb-2">Waste production (in lbs):</label>
        <input
          type="number"
          id="waste"
          name="waste"
          value={inputs.waste}
          onChange={handleInputChange}
          className="border p-2 w-full rounded"
          placeholder="Enter waste production"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="mt-4">
          <h3 className="text-xl">Your total carbon footprint:</h3>
          <p className="text-lg font-bold">{result.toFixed(2)} kg of CO2</p>
        </div>
      )}

      {result !== null && (
        <div className="mt-4">
          <h3 className="text-xl mt-4">Offset Suggestions:</h3>
          <ul className="list-disc pl-5">
            {offsetSuggestions.map((suggestion, index) => (
              <li key={index} className="mt-1">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;
