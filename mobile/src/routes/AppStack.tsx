import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//#region Pages
import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeacherListBottomTabs from './TeacherListBottomTabs';
//#endregion

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return (
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Landing" component={Landing}/>
            <Screen name="TeacherForm" component={TeacherForm}/>
            <Screen name="TeacherList" component={TeacherListBottomTabs}/>
        </Navigator>
    </NavigationContainer>)
}

export default AppStack;