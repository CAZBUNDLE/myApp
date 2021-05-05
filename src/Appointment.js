
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

function Appointment(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsFormOpen] = useState(false);
    const [isBooked, setBooked] = useState(false);
    if (isOpen){
        return (
            <div>
                <label>Preferred date:</label><DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br/>
                <label>Preferred time:</label><input id='time' type='text'></input><br/>
                <label>Contact email:</label><input id='email' type='text'></input><br/>
                <label>Contact phone:</label><input id='tel' type='text'></input><br/>
                <label>Notes/comments:</label><br/><textarea rows="5" cols="40"></textarea><br/>
                <button onClick={()=>{setIsFormOpen(false);setBooked(true);}}>Submit</button>
            </div>
        );
    }   
    return(
        <button onClick={()=>setIsFormOpen(true)}>{isBooked?"Booked":"Request viewing"}</button>
    )
}
export default Appointment;

  