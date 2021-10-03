import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function List({ disaster, navigation }) {
    return (
        <View style={{paddingHorizontal: 4}}>
            <TouchableOpacity onPress={() => navigation.navigate('Look For Disasters', { screen: 'SendAid', params: { required: disaster?.geometry.coordinates[0]}})}>
            <View style={styles.disaster} >
                <Text style={styles.item}>Latitude: <Text style={{color: '#3cff4d'}}>{disaster?.geometry.coordinates[0]}</Text></Text>
                <Text style={styles.item}>Longitude: <Text style={{color: '#3cff4d'}}>{disaster?.geometry.coordinates[1]}</Text></Text>
                <Text style={styles.item}>Disaster Type: <Text style={{color: '#3cff4d'}}>{disaster?.properties.categories[0].title}</Text></Text>
                <Text style={styles.item}>Date: <Text style={{color: '#3cff4d'}}>{new Date(disaster?.properties.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Text></Text>
                <Text style={styles.item}>Time: <Text style={{color: '#3cff4d'}}>{new Date(disaster?.properties.date).getHours()}:{new Date(disaster?.properties.date).getMinutes()}:{new Date(disaster?.properties.date).getSeconds()}</Text></Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    disaster: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'gray',
        marginTop: 2,
        borderRadius: 5,
    },
    item: {
        padding: 5,
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',

    },
})
