import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

//#region Pages

//#endregion

//#region Assets
import LandingImg from '../../assets/images/landing.png';
import StudyIcon from '../../assets/images/icons/study.png';
import GiveClassesIcon from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';
//#endregion

import api from '../../services/api';
import styles from './styles';

function Landing(){

  //#region Functions
   const [totalConnections, setTotalConnections] = useState(0);
    //O segundo parâmetro define quando executará a função do primeiro parâmetro
    useEffect( () => {
      api.get('connections').then(async response => {
        const total = await response.data.total;
        setTotalConnections(total);
      });
    }, []);
  
   const {navigate} = useNavigation();
  
    function handleNavigateToTeacherFormPage(){
      navigate('TeacherForm');
    }
    function handleNavigateToTeacherListPage(){
        navigate('TeacherList');
    }
    //#endregion

    return (
    <View style={styles.container}>

        <Image source={LandingImg} style={styles.banner}/>
        <Text style={styles.title}>
            Be Welcome {'\n'}
            <Text style={styles.titleBold}>To Your Platform of Online Studies</Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton onPress={handleNavigateToTeacherListPage} style={[styles.button, styles.buttonPrimary]}>
                <Image source={StudyIcon}/>
                <Text style={styles.buttonText}>Study</Text>
            </RectButton>

            <RectButton onPress={handleNavigateToTeacherFormPage} style={[styles.button, styles.buttonSecondary]}>
                <Image source={GiveClassesIcon}/>
                <Text style={styles.buttonText}>Give Classes</Text>
            </RectButton>
        </View>

        <Text style={styles.totalConnections}>
            Total of {totalConnections} connections already made {' '}
            <Image source={HeartIcon} />
        </Text>
    </View>
    );
}

export default Landing;

//#region Passos
/*
expo -init mobile
yarn add @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack 
yarn add @react-navigation/bottom-tabs
yarn add axios
*/
//#endregion