import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//#region Pages
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
//#endregion

const { Navigator, Screen } = createBottomTabNavigator();

function TeacherListBottomTabs(){
    return(
        <Navigator tabBarOptions={{
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16
            },
            inactiveBackgroundColor: '#555555',
            activeBackgroundColor: '#333333',
            inactiveTintColor: '#999999',
            activeTintColor: '#fff'
        }}>
            <Screen name="TeacherList" component={TeacherList} 
                options={{
                    tabBarLabel: 'Teachers',
                    tabBarIcon: ({color, size, focused}) => {
                        return(
                            <Ionicons name="ios-easel" 
                                size={size} color={focused ? '#8257e5' : color}
                            />
                        );
                    }
                }}
            />
            <Screen name="Favorites" component={Favorites} 
               options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({color, size, focused}) => {
                    return(
                        <Ionicons name="ios-heart" 
                            size={size} color={focused ? '#8257e5' : color}
                        />
                    );
                }
            }}
            />
        </Navigator>
    );
}

export default TeacherListBottomTabs;