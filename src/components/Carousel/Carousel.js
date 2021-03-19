import React, { useEffect,useState } from 'react';
import {StyleSheet, Text, View, Image,FlatList,ImageBackground,Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {COLORS} from '../../styles/colors';
import BANNER from '../../constants/Banner.json';

const IMAGES = [
  require('../../assets/Banner/Banner1.jpg'),
  require('../../assets/Banner/Banner2.jpg'),
]

const Banner = ({navigation}) =>{
    const [activeSlide, setActiveSlide] = useState(0);

    const _renderItem = ({item,index}) => {
        return(
          <View style={{
            backgroundColor:'floralwhite',
            width: Dimensions.get('window').width *0.9,
            height: 200,
          }}>
            <Image
              source={IMAGES[index]}
              style={styles.image}
            >
            </Image>
          </View>
        )
    }

    const RadioPagination: React.FC = () => {
        return (
          <Pagination
            dotsLength={BANNER.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.radio}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: COLORS.IBlue,
            }}
            inactiveDotStyle={{
              backgroundColor: COLORS.IGrey,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        );
      };

    return(
        <>
            <Carousel
            layout={'default'}
            data={BANNER}
            sliderWidth={Dimensions.get('window').width *0.9}
            itemWidth={Dimensions.get('window').width * 0.9}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveSlide(index)}
            />
            <RadioPagination />
        </>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
  },
  image: {
    width:'100%',
    height:'100%',
    resizeMode: 'contain',
  },
  radio: {
    marginTop: -40,
    alignItems: 'center',
  },
});

export default Banner;