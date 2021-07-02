import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'
import styles from './styles'

function SleepSelector(props) {
    const [hours, setHours] = useState(props.hours)

    function logHoursSlept(hours) {
        let hoursFormatted = hours.toFixed(1) * 10
        setHours(hoursFormatted)
        console.log("Hours in sleep component: " + hoursFormatted)
        props.logSleep(hoursFormatted)
        // Log hours slept to parent (Home) component
    }

    return (
        <>
            <View>
                <Text style={styles.text} >{hours.toFixed(1) * 1} hours</Text>
                <Slider value={hours/10} step={0.1} style={styles.slider} onValueChange={x => logHoursSlept(x)} />
            </View>
        </>
    )
}

export default SleepSelector