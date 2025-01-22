import React from 'react'

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const colorScheme = useColorScheme()
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={colorScheme === 'dark' ? styles.whiteText : styles.blackText}>Hello World !</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
        whiteText:{
            color:'#FFFFFF'
        },
        blackText:{
            color:'#000000'
        }
    }
)
export default AppPro