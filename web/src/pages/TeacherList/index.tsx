import React,{ useState, FormEvent } from 'react';

//#region Pages
import PageHeader from '../../components/PageHeader';
import TeacherItem, {ITeacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
//#endregion

//#region Assets
import SearchIcon from '../../assets/images/icons/search.svg';
//#endregion

import api from '../../services/api';
import './styles.css';

const TeacherList: React.FC = () => {

  //#region Functions
  const [subject, setSubject] = useState(''); 
  const [week_day, setWeek_day] = useState(''); 
  const [time, setTime] = useState(''); 

  const [teachers, setTeachers] = useState([]);

  async function handleSearchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('classes',{
        params: {
            subject,
            week_day,
            time
        }
    });
    setTeachers(response.data);
  }
  //#endregion

  return (
      <div id="page-teacher-list" className="container">
          <PageHeader title="These are the available teachers.">
                <form id="search-teachers" onSubmit={handleSearchTeachers}>
                    <Select name="subject" label="Subject" value={subject}
                        onChange={e => { setSubject(e.target.value) }} 
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
                    ]}/>
                    <Select name="week_day" label="Days of the week" value={week_day}
                        onChange={e => { setWeek_day(e.target.value) }}  
                        options={[
                        {value: '0', label: 'Sunday'},
                        {value: '1', label: 'Monday'},
                        {value: '2', label: 'Tuesday'},
                        {value: '3', label: 'Wednesday'},
                        {value: '4', label: 'Thursday'},
                        {value: '5', label: 'Friday'},
                        {value: '6', label: 'Saturday'}
                    ]}/>
                    <Input name="time" label="Time" type="time" value={time}
                        onChange={e => { setTime(e.target.value) }} />
                    <button type="submit"><img src={SearchIcon} alt="Search Icon"/></button>
                </form>
          </PageHeader>
          <main>
              {teachers.map((teacher: ITeacher)=> {
                  return <TeacherItem key={teacher.id}  teacher={teacher}/>
              })}      
          </main>
      </div>
  );
}

export default TeacherList;