import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import cars from './cars';
import styles from './styles';
import CarItem from '../CarItem'

const CarsList= (props) =>{
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item})=> <CarItem car = {item}/>}
                showsHorizontalScrollIndicator={'false'}
                snapToAlignment={'start'}
                // decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}

export default CarsList;