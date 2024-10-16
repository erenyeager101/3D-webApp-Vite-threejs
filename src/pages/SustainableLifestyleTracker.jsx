// src/pages/SustainableLifestyleTracker.jsx
import React, { useState } from 'react';

const SustainableLifestyleTracker = () => {
  const [responses, setResponses] = useState({
    transportation: '',
    diet: '',
    recycling: '',
    energy: '',
  });

  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSuggestions = [];

    if (responses.transportation === 'car') {
      newSuggestions.push("Consider using public transport or cycling to reduce emissions.");
    }
    if (responses.diet === 'meat') {
      newSuggestions.push("Try incorporating more plant-based meals into your diet.");
    }
    if (responses.recycling === 'no') {
      newSuggestions.push("Start recycling paper, plastic, and glass to reduce waste.");
    }
    if (responses.energy === 'high') {
      newSuggestions.push("Consider using energy-efficient appliances and switch off devices when not in use.");
    }

    setSuggestions(newSuggestions);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-5 rounded shadow-md mt-5">
      <h1 className="text-4xl font-bold text-center mb-4">Sustainable Lifestyle Tracker</h1>
      <p className="text-center mb-6">
        Answer the questions below to receive personalized suggestions for a more sustainable lifestyle.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block mb-2">How do you usually get around?</label>
          <select name="transportation" value={responses.transportation} onChange={handleChange} className="border p-2 w-full rounded">
            <option value="">Select...</option>
            <option value="car">Car</option>
            <option value="public_transport">Public Transport</option>
            <option value="bicycle">Bicycle</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">What does your diet mainly consist of?</label>
          <select name="diet" value={responses.diet} onChange={handleChange} className="border p-2 w-full rounded">
            <option value="">Select...</option>
            <option value="meat">Meat</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Do you recycle?</label>
          <select name="recycling" value={responses.recycling} onChange={handleChange} className="border p-2 w-full rounded">
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">How would you rate your energy consumption?</label>
          <select name="energy" value={responses.energy} onChange={handleChange} className="border p-2 w-full rounded">
            <option value="">Select...</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full">
          Get Suggestions
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold">Suggestions:</h2>
          <ul className="list-disc pl-5">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="mt-1">{suggestion}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Get Involved!</h2>
        <p className="mt-2">Here are some NGOs making a difference:</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded shadow">
            <img src="https://images.pexels.com/photos/1662145/pexels-photo-1662145.jpeg?auto=compress&cs=tinysrgb&w=600" alt="NGO 1" className="w-full h-40 object-cover rounded" />
            <h3 className="font-semibold mt-2">Eco Warriors</h3>
            <p className="text-sm">Working towards conservation and sustainability in local communities.</p>
          </div>
          <div className="border p-4 rounded shadow">
            <img src="https://www.indiaisus.com/images/uploadedimages/thumbs/0010460_enviroment..jpeg" alt="NGO 2" className="w-full h-40 object-cover rounded" />
            <h3 className="font-semibold mt-2">Green Earth Initiative</h3>
            <p className="text-sm">Dedicated to reforestation and promoting renewable energy sources.</p>
          </div>
        </div>
        <a href="#" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Learn More About These Projects
        </a>
      </div>
    </div>
  );
};

export default SustainableLifestyleTracker;
