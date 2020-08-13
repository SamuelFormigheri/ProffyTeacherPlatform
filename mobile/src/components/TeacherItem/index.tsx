import React, {useState} from 'react';
import { View, Image, Text, Linking, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

//#region Pages

//#endregion

//#region Assets
import HeartIcon from '../../assets/images/icons/heart-outline.png';
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';
//#endregion

import api from '../../services/api';
import styles from './styles';

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
    favorited: boolean;
}


const TeacherItem: React.FC<ITeacherProps> = ({ teacher, favorited }) => {

    //#region Functions
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsApp(){
        api.post('connections',{
            fk_user_id: teacher.id
        });
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];
        
        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited){
            const index = favoritesArray.findIndex((teacherItem: ITeacher)=> {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(index, 1);

            setIsFavorited(false);

        }else{
            favoritesArray.push(teacher);
           
            setIsFavorited(true);
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    //#endregion

    return (
        <View style={styles.container}> 
            <View style={styles.profile}>
                <Image style={styles.avatar} 
                source={{ uri: teacher.avatar }}/>

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>   
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/Hour : {'  '}
                    <Text style={styles.priceValue}>U$ {teacher.cost}</Text>
                </Text>    
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, isFavorited ? styles.favorited: {}]}
                        onPress={handleToggleFavorite}
                    >
                        {isFavorited ? <Image source={UnfavoriteIcon}/> : <Image source={HeartIcon}/> }
                    </RectButton>
                    <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
                        <Image source={WhatsappIcon}/>
                        <Text style={styles.contactButtonText}>Contact me</Text>
                    </RectButton>   
                </View>
            </View>      
        </View>
    );
}

export default TeacherItem;
