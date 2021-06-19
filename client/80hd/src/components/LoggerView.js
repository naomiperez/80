import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import Theme from '../styles/colors'

const styles = StyleSheet.create({
    container: {
      backgroundColor: Theme.primaryLight,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 20,
      borderColor: Theme.primaryLight
    },
    title: {
        color: Theme.text
    },
    divider: {
        backgroundColor: Theme.text,
        height: 1.5,
        borderRadius: 10
    },
})

function LoggerView ({selector}) {
    return(
        <View >
            <Card containerStyle={styles.container}>
                <Card.Title style={styles.title}>Today's Mood</Card.Title>
                    <Card.Divider style={styles.divider} />
                    {selector}
            </Card>
        </View>
    );
}

export default LoggerView