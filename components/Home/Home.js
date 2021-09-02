import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import nasaLogo from '../../assets/nasa2.png';
export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={nasaLogo} style={{ width: "60%", height: "50%" }} /> 
        </View>
    )
}

const styles = StyleSheet.create({})
