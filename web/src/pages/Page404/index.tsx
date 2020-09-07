import React from 'react';
import { Link } from 'react-router-dom';

//#region Pages
import PageHeader from '../../components/PageHeader';
//#endregion

//#region Assets
import BackIcon from '../../assets/images/icons/back.svg';
//#endregion
import {Container} from './styles';
//import './styles.css';
const Page404: React.FC = () => {
  return (
      <Container>
          <PageHeader title="Error"/>
          <main>
            <h2>Page not Found - 404</h2>
            <Link to="/"><img src={BackIcon} alt="Back Icon"/> Back to Home Page</Link>
          </main>
      </Container>
  );
}

export default Page404;