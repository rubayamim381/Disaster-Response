import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SendAid from '../SendAid/SendAid'
import LookDisasterHome from './LookDisasterHome/LookDisasterHome'

const Stack = createStackNavigator();

export default function LookDisaster() {

    return (
        <Stack.Navigator initialRouteName="LookDisasterHome">
            <Stack.Screen name="LookDisasterHome" component={LookDisasterHome} options={{ headerShown: false }} />
            <Stack.Screen name="SendAid" component={SendAid} options={{ title: "" }} />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    
})
