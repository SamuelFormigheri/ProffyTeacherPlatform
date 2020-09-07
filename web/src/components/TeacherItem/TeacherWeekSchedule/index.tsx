import React, { useState, useEffect } from 'react';

import{Container, Day} from './styles';

import api from '../../../services/api';

interface IClasses{
    id: number;
}

interface ISchedule{
    id: number,
    week_day: number,
    from: number,
    to: number,
    fk_class_id: number
}

const TeacherWeekSchedule: React.FC<IClasses> = ({id}) => {

    //#region Functions
    const [classId] = useState(id);
    const [monday, setMonday] = useState('');
    const [tuesday, setTuesday] = useState('');
    const [wednesday, setWednesday] = useState('');
    const [thursday, setThursday] = useState('');
    const [friday, setFriday] = useState('');

    function convertMinutesToHours(n: number){
        var hours = (n / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        var hoursexit = rhours.toString();
        var minutesexit = rminutes.toString();
        if(rhours/10 < 1){
            hoursexit = "0" + rhours.toString();
        }
        if(rminutes/10 < 1){
            minutesexit = "0" + rminutes.toString();
        }
        return hoursexit + ":" + minutesexit;
    }

    useEffect(()=>{
        api.get('classes-details',{
            params: {
                id:classId
            }
        }).then((response)=>{
            response.data.map((hour: ISchedule)=>{
                const from = convertMinutesToHours(hour.from);
                const to = convertMinutesToHours(hour.to);
                switch(hour.week_day){
                    case 0:
                        break;
                    case 1:
                        setMonday(from + " - " + to);
                        break;
                    case 2:
                        setTuesday(from + " - " + to);
                        break;
                    case 3:
                        setWednesday(from + " - " + to);
                        break;
                    case 4:
                        setThursday(from + " - " + to);
                        break;
                    case 5:
                        setFriday(from + " - " + to);
                        break;
                    case 6:
                        break;
                }
                return true;
            });
        });

    }
    ,[classId]);
    //#endregion

  return (
    <Container>
        <Day style={monday ? {opacity:"1"}: {opacity:"0.2"}}>
            <label>Day</label>
            <span>Monday</span>
            <label>Hour</label>
            <span>{monday}</span>               
        </Day>
        <Day className="day"style={tuesday ? {opacity:"1"}: {opacity:"0.2"}}>
            <label>Day</label>
            <span>Tuesday</span>
            <label>Hour</label>
            <span>{tuesday}</span> 
        </Day>
        <Day className="day" style={wednesday ? {opacity:"1"}: {opacity:"0.2"}}>
            <label>Day</label>
            <span >Wednesday</span> 
            <label>Hour</label>
            <span>{wednesday}</span>   
        </Day>
        <Day className="day"style={thursday ? {opacity:"1"}: {opacity:"0.2"}}>
            <label>Day</label>
            <span >Thursday</span>
            <label>Hour</label>
            <span>{thursday}</span> 
        </Day>
        <Day className="day"style={friday ? {opacity:"1"}: {opacity:"0.2"}}>
            <label>Day</label>
            <span>Friday</span>
            <label>Hour</label>
            <span>{friday}</span> 
        </Day>
    </Container>
  );
}

export default TeacherWeekSchedule;