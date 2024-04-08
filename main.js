import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    InnerContainer,
    StyledFormArea,
    ButtonText,
    StyledButton,
    Line,
    Avatar,
    FlatListContainer
 } from '../components/styles';
import { FlatList, View, StyleSheet, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Main = ({handleAuthentication}) => {
    const data = [
        {
            id: 1,
            title: "Event 1",
            imageUrl: "https://wordoffaithstthomas.com/wp-content/uploads/2023/08/Sunday-Service-WOFICC-1280x800.jpg",
            subtitle: "This sermon will be on 1/1/2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis porta pharetra. Quisque at ex id purus lobortis ornare ac at ipsum. Donec tristique risus ut diam euismod, nec luctus erat bibendum. Nunc sollicitudin sapien neque, vitae rutrum sapien blandit quis. Nulla facilisi.",
        },
        {
            id: 2,
            title: "Sermon 1",
            imageUrl: "https://impactpittsburgh.com/wp-content/uploads/2023/02/SundayWorshipService.jpg",
            subtitle: "This sermon will be on 5/5/2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis porta pharetra. Quisque at ex id purus lobortis ornare ac at ipsum. Donec tristique risus ut diam euismod, nec luctus erat bibendum. Nunc sollicitudin sapien neque, vitae rutrum sapien blandit quis. Nulla facilisi.",
        },
        {
            id: 3,
            title: "Event 2",
            imageUrl: "https://dq5pwpg1q8ru0.cloudfront.net/2022/10/02/15/48/32/bade62f0-e182-4b74-937f-bab1d6646859/Morning-Men%2527s-Group.png",
            subtitle: "This event will be on 7/7/2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis porta pharetra. Quisque at ex id purus lobortis ornare ac at ipsum. Donec tristique risus ut diam euismod, nec luctus erat bibendum. Nunc sollicitudin sapien neque, vitae rutrum sapien blandit quis. Nulla facilisi.",
        },
        
    ];
    return (
        <>
            <StatusBar style = "dark"/>
            <SafeAreaView>
             <InnerContainer>
                    <FlatList 
                    data = {data}
                    renderItem={({ item }) => (
                        <FlatListContainer>
                        <Image 
                        source = {{uri: item.imageUrl}}
                        style = {styles.image}
                        resizeMode='contain'
                        />
                        <Text style = {styles.Text}>{item.title}</Text>
                        <Text style = {styles.SubText}>{item.subtitle}</Text>
                        <Text style = {styles.Description}>{item.description}</Text>
                        </FlatListContainer>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{height:2, backgroundColor: "#f1f2f6"}}></View>}
                    />
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/QHC.jpg')}/>
                        <Text style = {styles.Description}>Church information:            000-000-0000           ________@gmail.com</Text>   
                        <Line />
                        <StyledButton onPress= {handleAuthentication}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                        
                    </StyledFormArea>
            </InnerContainer>
            </SafeAreaView>
        </>
    );
};
export default Main;

const styles = StyleSheet.create({
    Text: {
        fontSize:24,
        paddingTop: 6,
    },
    SubText: {
        fontSize: 16,
        paddingTop: 10,
    },
    Description: {
        fontSize: 12,
        paddingTop: 10,
    },
    image: {
        opacity:1,
        width: 380,
        height: 230,
        justifyContent: "center",
    }
})