import React, { useState } from 'react';
import { View,Text, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

//#region Pages
import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
//#endregion

//#region Assets

//#endregion

import api from '../../services/api';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList(){

    //#region Functions
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if (response){
                const favoritedTeachers = JSON.parse(response);
                const idFavoriteds = favoritedTeachers.map((teacher :ITeacher) => {
                   return teacher.id; 
                })
                setFavorites(idFavoriteds);
            }
        });
    }
    
    useFocusEffect(() =>{
        loadFavorites();
    });

    async function handleFiltersSubmit(){
        loadFavorites();
        const response = await api.get('classes',{
            params: {
                subject,
                week_day,
                time
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    function handleToggleFilters(){
        setIsFiltersVisible(!isFiltersVisible);
    }
    //#endregion

    return (
        <View style={styles.container}>
            <PageHeader title="Available Teachers"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilters}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Subject</Text>
                    <TextInput style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Which Subject do you wanna learn?"
                    ></TextInput>

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Week Day</Text>
                            <TextInput style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeek_day(text)}
                                placeholder="Which Day?"
                            ></TextInput>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Time</Text>
                            <TextInput style={styles.input}
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholder="Which Hour?"
                            ></TextInput>
                        </View>
                    </View>
                    <RectButton style={styles.submitButton}
                        onPress={handleFiltersSubmit}
                    >
                        <Text style={styles.submitButtonText}>Search</Text>
                    </RectButton>
                </View>)}
                
            </PageHeader>

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: ITeacher) => {
                    return(<TeacherItem key={teacher.id} teacher={teacher}
                        favorited={favorites.includes(teacher.id)}  
                    />)
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;
