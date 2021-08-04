import React from 'react'
import PropTypes from 'prop-types'
import AppLoading from 'expo-app-loading'
import { Text } from 'react-native'
import {
	useFonts,
	// DMMono_300Light,
	// DMMono_300Light_Italic,
	DMMono_400Regular,
	// DMMono_400Regular_Italic,
	DMMono_500Medium,
	// DMMono_500Medium_Italic,
} from '@expo-google-fonts/dm-mono'
import Theme from '../styles/colors'

export default function StyledText(props) {
	let [fontsLoaded] = useFonts({
		DMMono_400Regular,
		DMMono_500Medium,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
			<Text
				style={{
					color: Theme.text,
					fontSize: 23,
					fontWeight: '700',
					fontStyle: 'normal',
					fontFamily: 'DMMono_500Medium',
				}}>
				{props.text}
			</Text>
		)
	}
}
