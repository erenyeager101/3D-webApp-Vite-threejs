// src/pages/About.jsx
import React from 'react';
import CarbonFootprintCalculator from '../components/CarbonFootprintCalculator';

const About = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4">
        This application helps you calculate your carbon footprint based on the distance traveled.
        Enter the distance in miles to see how much CO2 you generate.
      </p>
      <CarbonFootprintCalculator />
    </div>
  );
};

export default About;
