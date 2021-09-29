import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

export default function MapView() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <>
            {isLoading && <View style={{justifyContent: 'center', backgroundColor:'white', paddingTop: 10}}>
                <ActivityIndicator size="large" color="gray" />
            </View>}
            <WebView
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://worldview.earthdata.nasa.gov/?e=true&efs=true&efd=2021-05-03,2021-08-31&efc=dustHaze,manmade,seaLakeIce,severeStorms,snow,volcanoes,waterColor,wildfires&l=IMERG_Precipitation_Rate,Reference_Labels_15m,Reference_Features_15m,VIIRS_SNPP_CorrectedReflectance_TrueColor,MODIS_Terra_CorrectedReflectance_TrueColor&lg=false&t=2021-08-30-T08%3A00%3A00Z' }}
                onLoad={() => setIsLoading(false)}
            />
        </>
    )
}

const styles = StyleSheet.create({})
