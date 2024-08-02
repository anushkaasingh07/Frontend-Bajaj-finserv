import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Alphabets', label: 'Alphabets' },
  { value: 'Numbers', label: 'Numbers' },
  { value: 'Highest alphabet', label: 'Highest alphabet' },
];

const MultiSelectDropdown = ({ onChange }) => {
  const handleChange = (selectedOptions) => {
    onChange(selectedOptions.map(option => option.value));
  };

  return (
    <Select
      isMulti
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  );
};

export default MultiSelectDropdown;
