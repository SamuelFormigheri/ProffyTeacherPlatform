import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//#region Pages

//#endregion

//#region Assets
import BackgroundImage from '../../assets/images/give-classes-background.png';
//#endregion

import styles from './styles';

function TeacherForm(){

    //#region Functions
    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }
    //#endregion

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="contain" source={BackgroundImage} style={styles.content}>
                <Text style={styles.title}>Want to be a Proffy?</Text>
                <Text style={styles.description}>To start you need to register as a teacher on our Web Platform.</Text>
            </ImageBackground>
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Allright</Text>
            </RectButton>
        </View>
    );
}

export default TeacherForm;
