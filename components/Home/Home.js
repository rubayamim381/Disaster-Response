import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Linking, ScrollView, Image, Button, Alert } from 'react-native'
import WebView from 'react-native-webview'

import YoutubePlayer from "react-native-youtube-iframe";
export default function Home({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            {/* header image*/}
            <ImageBackground source={{ uri: 'https://i.ibb.co/WgGGcWN/fires-smoke-hurricanes.jpg' }} style={styles.image} >
                <Text style={styles.text}>Welcome To {'\n'} Disaster Response</Text>
            </ImageBackground>

            {/* Explore our journey section*/}
            <View style={{ alignItems: 'center', padding: 8, marginTop: 10 }}>
                <Text style={styles.headingText}>Explore Our Journey</Text>
                <Text style={styles.paragraphText}>Our goal is to be aware of risks of natural disasters and respond to
                    them fast and efficiently . We aim to create a tool to help the people
                    who help others , enabling volunteers to respond fast and efficiently
                    to nearby crisis. Specially during disaster</Text>

                <TouchableOpacity
                    onPress={() => Linking.openURL('mailto:jkkniutechhub@gmail.com')}
                    style={styles.button}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Contact Us</Text>
                </TouchableOpacity>
            </View>

            {/* Mapview section */}
            <View style={{ marginVertical: 30, alignItems: 'center', padding: 8}}>
                <Image source={{ uri: 'https://i.ibb.co/s9kZ1H4/png1.png' }} style={{ width: 200, height: 159, marginBottom: 20 }} />
                <Text style={styles.headingText}>Mapview</Text>
                <Text style={styles.headingText}>For Nearby Disaster</Text>
                <Text style={styles.paragraphText}>
                    The application uses Nasa's EONET API and a few other tools to
                    find the natural disasters happening around the globe. And
                    where ever there is a disaster there is a need for help.
                    Volunteers nearby gets informed of the disaster to swiftly
                    appear at site with help. NASA's EONET API for finding out
                    the disasters as they hit in near real time .
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('MapView')}
                    style={styles.button}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Checkout the disaster area</Text>
                </TouchableOpacity>
            </View>

            {/* Nasa Video */}
            <View style={{ width: '100%', marginBottom: 20 }}>
                <YoutubePlayer
                    height={220}
                    play={false}
                    videoId={"Ltpf5jc-OWU"}
                />
            </View>

            <View style={{padding: 8, backgroundColor: 'lightgray'}}>
                <Text style={styles.headingText}>About {'\n'}The Disaster Response</Text>
                <Text style={styles.paragraphText}>We, JKKNIU_Tech_Hub, are working to 
                impower volunteers to respond to every natural disaster as quick and 
                efficiently as possible with the help of NASA's data.</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        resizeMode: 'cover',
        alignItems: 'center',
        width: '100%',
        height: 300
    },
    text: {
        color: 'lightgreen',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '25%'
    },
    button: {
        backgroundColor: 'darkgreen',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        color: 'darkgreen',
        textAlign: 'center'
    },
    paragraphText: {
        textAlign: 'justify',
        marginVertical: 15,
        color: 'black',
        fontSize: 16
    }

})
