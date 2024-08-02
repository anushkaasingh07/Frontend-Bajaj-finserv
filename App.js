import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import Results from './components/Results';
import axios from 'axios';
import './App.css';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (jsonInput) => {
    try {
      const res = await axios.post('YOUR_BACKEND_API_ENDPOINT', jsonInput);
      setResponse(res.data);
    } catch (error) {
      console.error('Error submitting JSON:', error);
    }
  };

  const handleSelectChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div className="App">
      <h1>Your Roll Number</h1>
      <JsonInput onSubmit={handleSubmit} />
      {response && (
        <>
          <MultiSelectDropdown onChange={handleSelectChange} />
          <Results response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
