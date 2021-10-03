import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native'
import List from '../../List/List';

export default function LookDisasterHome({navigation}) {
    
    const [disasters, setDisasters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events/geojson?limit=10')
            .then(res => res.json())
            .then(data => {
                setDisasters(data.features);
                setIsLoading(false);
            })
    }, [])

    let id = 1;
    return (
        <ScrollView style={styles.container}>
            {
                isLoading &&
                <ActivityIndicator size="large" color="gray" style={{ marginTop: 5 }} />
            }
            {
                disasters?.map( disaster => <List disaster={disaster} navigation={navigation} key={id++}></List>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
