import React, { useState } from 'react';
import Calender from 'react-calendar';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-calendar/dist/Calendar.css';

const MyApp = () => {
  const [currentdate]=useState(new Date());
  const [date1,setDate1] = useState(new Date());
  const [date2,setDate2] = useState(new Date());

  const onChange1 = date1 => {
    
    setDate1(date1);
   
  };

  const onChange2 = date2 => {
    setDate2(date2);
  };

  
  return(<div className="row" >
    
     
          <div><h4><br/>START DATE</h4>
        <Calender onChange = {onChange1} value = {date1} minDate = {date1}/>
        {console.log(date1)}
  <p>Your booking will start on {date1.toString()}</p>
  </div>
        <div  ><h4>END DATE</h4>
        <Calender onChange = {onChange2} value = {date2} minDate={date1}/>
        {console.log(date2)}
        <p>Your booking will end on {date2.toString()}</p>
        </div>
      </div>
      

  );
};
export default MyApp;