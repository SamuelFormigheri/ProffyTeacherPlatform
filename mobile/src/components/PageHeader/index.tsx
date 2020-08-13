import React, {ReactNode} from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

//#region Pages

//#endregion

//#region Assets
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
//#endregion

import styles from './styles';

interface IPageHeaderProps{
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<IPageHeaderProps> = ({ title, headerRight, children }) => {

    //#region Functions
    const { navigate } = useNavigation();

    function handleGoBack(){
        navigate('Landing');
    }
    //#endregion

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain" />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    );
}

export default PageHeader;
