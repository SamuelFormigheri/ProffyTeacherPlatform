import React,{useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

//#region Pages
import PageHeader from '../../components/PageHeader';
import TeacherItem, {ITeacher} from '../../components/TeacherItem';
//#endregion

//#region Assets

//#endregion

import styles from './styles';

function Favorites(){

    //#region Functions
    const [favorites, setFavorites] = useState([]);
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response){
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(()=>{
       loadFavorites(); 
    });
    //#endregion

    return (
        <View style={styles.container}>
            <PageHeader title="My Favorite Teachers"/>

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: ITeacher) => {
                    return(
                        <TeacherItem key={teacher.id}
                        teacher={teacher}
                        favorited/>
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default Favorites;
