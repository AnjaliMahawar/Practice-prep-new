import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calender = () => {
    const [startDate, setStartDate] = useState(new Date());
  
    const handleRawChange = (e) => {
        const target = e.target;
        if (target.tagName.toLowerCase() === 'input') {
          target.readOnly = true; // Make the input readonly to prevent keyboard input
        }
      };
    
      return (
        <div>
          <h2>Select a Date</h2>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showYearDropdown // Show the year dropdown
            dateFormat="MMMM d, yyyy"
            dropdownMode="scroll" // Display a scrollable year dropdown
            onChangeRaw={handleRawChange} // Handle raw change event
          />
        </div>
      );
  };

export default Calender