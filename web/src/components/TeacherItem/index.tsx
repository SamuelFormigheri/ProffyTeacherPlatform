import React from 'react';

//#region Pages
import TeacherWeekSchedule from './TeacherWeekSchedule';
//#endregion

//#region Assets
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';
//#endregion

import api from '../../services/api';
import {Container, Header, Footer} from './styles';
//import './styles.css';
export interface ITeacher {
    avatar: string;
    bio: string;
    cost: string;
    id: number;
    name: string;
    subject: string;
    fk_user_id: number;
    whatsapp: string;
}

interface ITeacherProps{
    teacher: ITeacher;
}
const TeacherItem: React.FC<ITeacherProps> = ({teacher}) => {
  //#region Functions
  async function handleCreateConnection(){
      await api.post('connections',{
          fk_user_id: teacher.id
      });
  }
  //#endregion
  return (
    <Container>
        <Header>
            <img src={teacher.avatar} alt={teacher.name}></img>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
            </div>
        </Header>
        <p>{teacher.bio}</p>
        <TeacherWeekSchedule id={teacher.id}/> 
        <Footer>
            <p>
            Price/Hour
            <strong>U$ {teacher.cost}</strong>
            </p>
            <a onClick={handleCreateConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <img src={WhatsAppIcon} alt="Whats App Icon"/>
                Contact me
            </a>        
        </Footer>
    </Container>
  );
}

export default TeacherItem;