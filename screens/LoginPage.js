import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import {Router, Route, Link, RouteHandler} from 'react-router';
import axios from 'axios';


function LoginPage({ navigation }) {
    return (
        <View style={styles.container}>

        <Image 
            style = {styles.logoHeader}
            source={require("../logo.png")}>
        </Image>

            <Text style={styles.tagline}>Access the World</Text>

            <View style={styles.form}>
            <Input
                placeholder='Username'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    />
                }
            />
            <Input
                placeholder='Password'
                leftIcon={
                    <Icon
                    name='key'
                    size={24}
                    color='black'
                    />
                
                }
                secureTextEntry={true}
            />

            <Button
                title="Login"
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Dashboard');
                }}
            />
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 0,
    },
    logoHeader:{
        width: 150,
        height: 150,
        marginTop: 0,
        alignSelf: "center",
    },
    button:{
      margin: 10,
    },  
    form: {
      padding: 20,
      marginTop: 50,
    },
    tagline:{
      textAlign: 'center',
      fontSize: 30
    },
    logoHeader:{
        width: 200,
        height: 200,
        marginTop: 30,
        alignSelf: "center",
    },
});

export default LoginPage;
