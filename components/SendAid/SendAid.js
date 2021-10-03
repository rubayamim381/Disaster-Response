import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function SendAid({ route }) {
    const { required } = route.params;
    return (
        <View style={styles.disasterContainer}>
            <Text style={{fontSize: 24}}>Water Required: <Text style={{color: 'red'}}>{Math.abs(required).toFixed(0) * 5}</Text> gallon</Text>
            <Text style={{fontSize: 24, marginBottom: 20}}>Biscuit Required: <Text style={{color: 'red'}}>{Math.abs(required).toFixed(0) * 100}</Text> packets</Text>
            
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Send Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Send Volunteers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Send Resource</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    disasterContainer: {
        marginTop: 10, 
        marginHorizontal: 2, 
        borderWidth: 1, 
        borderColor: 'gray', 
        borderRadius: 5, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 10,
        
    },
    button: {
        backgroundColor: 'darkgreen',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        width: '60%',
        marginTop: 8,
    },
})
