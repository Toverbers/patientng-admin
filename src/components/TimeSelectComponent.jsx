import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const TimeSelectComponent = ({ selectedTime, onTimeChange, title, label }) => {

    /* const times = [];
    for (let hour = 1; hour <= 12; hour++) {
      const ampm = hour < 12 ? 'AM' : 'PM';
      times.push(`${hour} ${ampm}`);
    } */

      /* const times = [];
        for (let hour = 0; hour < 24; hour++) {
            const formattedHour = hour < 10 ? `0${hour}` : hour;
            times.push(`${formattedHour}:00`);
        } */

    const times = [];
    for (let hour = 0; hour < 24; hour++) {
        const formattedHour = hour < 10 ? `0${hour}` : hour;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const displayHour = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format for display
        times.push({ value: `${formattedHour}:00`, label: `${displayHour}:00 ${ampm}` });
    }

  return (
    <>
    <div>
      <p>{title}</p>
      <Select className="" defaultValue={selectedTime}
                value={selectedTime}
                onValueChange={(value) => {onTimeChange(value)}} >
              <SelectTrigger className="h-[50px]">
                <SelectValue placeholder={label}></SelectValue>
              </SelectTrigger>
              <SelectContent>
              {times.map((time, index) => (
                <SelectItem key={index} value={time.value}>{time.label}</SelectItem> 
                ))}
              
              </SelectContent>
            </Select>
    </div>
    </>
  )
}

export default TimeSelectComponent