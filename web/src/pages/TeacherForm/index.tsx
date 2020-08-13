import React, { useState, useEffect, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

//#region Pages
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
//#endregion

//#region Assets
import warningIcon from '../../assets/images/icons/warning.svg';
//#endregion

import api from '../../services/api';
import './styles.css';

const TeacherForm: React.FC = () => {

  //#region Functions
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItens, setScheduleItens] = useState([
    { week_day: 0, from: '', to: ''}
  ]);

  function addNewScheduledItem(){
    setScheduleItens([
      ...scheduleItens,
      { week_day: 0, from: '', to: ''}
    ]);
  }

  function setScheduleItenValue(position: number, field: string, value: string){
    const updatedArray = scheduleItens.map((scheduleIten, index) => {
      if(index === position){
        return {...scheduleIten, [field]: value };
      }
      return scheduleIten;
    });
    setScheduleItens(updatedArray);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes',{
      name: name,
      avatar: avatar,
      whatsapp: whatsapp,
      bio: bio,
      subject: subject,
      cost: Number(cost),
      schedule: scheduleItens
    }).then(()=>{
      history.push('/');
    }).catch(()=>{
      alert('Erro no cadastro');
    })
  }
  useEffect(()=>{
    var retrievedObject = localStorage.getItem('proffy-token');
    if(retrievedObject != null){
      var userCredentials = JSON.parse(retrievedObject);
      setName(userCredentials[0].first_name + ' ' + userCredentials[0].last_name);

      api.post('profile',{
        fk_login_id: userCredentials[0].id
      }).then((resp)=> {
        const {data} = resp;
        setAvatar(data[0].avatar);
        setWhatsapp(data[0].whatsapp);
        setBio(data[0].bio);
      });
    }
  }
  ,[]);
  //#endregion

  return (
    <div id="page-teacher-form" className="container">
        <PageHeader 
          title="So you want to teach? That's Amazing."
          description="The first step is to fill out this registration form"/>
        <main>
          <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Your Personal Data</legend>
            <Input name="name" label="Name" placeholder="Type your Full Name..." value={name} disabled/>
            <Input name="avatar" label="Avatar" placeholder="Type the url of your Avatar Image..." value={avatar} disabled/>
            <Input name="whatsapp" label="WhatsApp" placeholder="Type the number of your phone to further contact..." value={whatsapp} disabled/>
            <Textarea name="bio" label="Biography" value={bio} onChange={(e) => setBio(e.target.value)}/>
          </fieldset>

          <fieldset>
            <legend>About the Class</legend>
            <Select name="subject" label="Subject" 
                    options={[
                      {value: 'Arts', label: 'Arts'},
                      {value: 'Biology', label: 'Biology'},
                      {value: 'Matemathics', label: 'Matemathics'},
                      {value: 'Physics', label: 'Physics'},
                      {value: 'Chemistry', label: 'Chemistry'},
                      {value: 'Physical Education', label: 'Physical Education'},
                      {value: 'Portuguese', label: 'Portuguese'},
                      {value: 'English', label: 'English'},
                      {value: 'Spanish', label: 'Spanish'}
                    ]} value={subject} onChange={(e) => setSubject(e.target.value)}/>
            <Input name="cost" label="Cost" placeholder="Type the cost of your class..." value={cost} onChange={(e) => setCost(e.target.value)}/>           
          </fieldset>

          <fieldset>
              <legend>Available times
                <button type="button" onClick={addNewScheduledItem}>+ New Time</button>
              </legend>

              {scheduleItens.map((scheduleIten,index) => {
                return(
                  <div key={scheduleIten.week_day + scheduleIten.from + scheduleIten.to} className="schedule-item">
                      <Select name="week_day" label="Days of the week" value={scheduleIten.week_day} onChange ={e => {setScheduleItenValue(index, 'week_day', e.target.value)}}
                            options={[
                            {value: '0', label: 'Sunday'},
                            {value: '1', label: 'Monday'},
                            {value: '2', label: 'Tuesday'},
                            {value: '3', label: 'Wednesday'},
                            {value: '4', label: 'Thursday'},
                            {value: '5', label: 'Friday'},
                            {value: '6', label: 'Saturday'}
                      ]}/>
                      <Input name="from" label="From" type="time" value={scheduleIten.from} onChange ={e => {setScheduleItenValue(index, 'from', e.target.value)}}/>
                      <Input name="to" label="To" type="time" value={scheduleIten.to} onChange ={e => {setScheduleItenValue(index, 'to', e.target.value)}}/>
                  </div>
                )
              })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Warning Icon"/>
              Important! <br />
              Fill in all the details
            </p>
            <button type="submit">
              Save Registration
            </button>
          </footer>
          </form>
        </main>
    </div>
  );
}

export default TeacherForm;