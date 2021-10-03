import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'
import NetInfo from "@react-native-community/netinfo";

export default function MapView() {
    const [isLoading, setIsLoading] = useState(true);
    const [isConnect, setIsConnect] = useState(true);

    NetInfo.fetch().then(state => {
        if (state.isConnected) {
            setIsConnect(true);
        } else {
            setIsConnect(false);
            setIsLoading(false);
        }
    });

    return (
        <>
            {isLoading && <View style={{ justifyContent: 'center', backgroundColor: 'white', paddingTop: 10 }}>
                <ActivityIndicator size="large" color="gray" />
            </View>}
            {isConnect ? <WebView
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://worldview.earthdata.nasa.gov/?e=true&efs=true&efd=2021-05-03,2021-08-31&efc=dustHaze,manmade,seaLakeIce,severeStorms,snow,volcanoes,waterColor,wildfires&l=IMERG_Precipitation_Rate,Reference_Labels_15m,Reference_Features_15m,VIIRS_SNPP_CorrectedReflectance_TrueColor,MODIS_Terra_CorrectedReflectance_TrueColor&lg=false&t=2021-08-30-T08%3A00%3A00Z' }}
                onLoad={() => setIsLoading(false)}
            />
                :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Connect to the internet</Text>
                    <Text>You're offline. Check your internet connection</Text>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({})
