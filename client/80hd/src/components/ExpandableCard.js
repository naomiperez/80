import React from 'react'
import { Text, View, Image, TouchableHighlight, Animated } from 'react-native';
import dropdown from '../assets/images/dropdown.png'
import styles from './LoggerCard/styles'

class ExpandableCard extends React.Component {

    constructor(props) {
        super(props);

        this._initContentHeight = this._initContentHeight.bind(this);
        this.toggle = this.toggle.bind(this);


        this.anime.expanded = props.expanded;
        this.state = {
            expanded: props.expanded
        }

        this.anime.height = new Animated.Value(props.expandHeight)
    }

    anime = {
        height: new Animated.Value(60),
        expanded: false,
        contentHeight: 0,
    }

    _initContentHeight(evt) {
        if (this.anime.contentHeight > 0) return;
        this.anime.contentHeight = evt.nativeEvent.layout.height;
        this.anime.height.setValue(this.anime.expanded ? this._getMaxValue() : this._getMinValue());
    }

    _getMaxValue() { return this.anime.contentHeight };
    _getMinValue() { return 0 };

    toggle() {
        Animated.timing(this.anime.height, {
            toValue: this.anime.expanded ? this._getMinValue() : this._getMaxValue(),
            duration: 90,
            useNativeDriver: false
        }).start();
        this.anime.expanded = !this.anime.expanded;

        // Wait for container View to expand before rendering the Selection Options
        if (this.state.expanded === false) {
            setTimeout(() => {
                this.setState(prevState => ({
                    expanded: !prevState.expanded
                }))
            }, 90);
        } else {
            this.setState(prevState => ({
                expanded: !prevState.expanded
            }))
        }

    }

    // The outermost View is the Card, the second View is the flex container,
    // then the Text is the title of the card, the TouchableHighlight is the 'expand' button,
    // and the Animated.View is the expanded View that has a dynamic height and displays the
    // Logger Selection options
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inlineStyle} >
                    <Text style={styles.text}>{this.props.cardTitle}</Text>
                    <TouchableHighlight underlayColor="transparent" onPress={this.toggle}>
                        <Image style={styles.img} source={dropdown}></Image>
                    </TouchableHighlight>
                </View>
                <Animated.View style={[{ height: this.anime.height }]} onLayout={this._initContentHeight}>
                    {this.state.expanded === true ? this.props.children : <></>}
                </Animated.View>
            </View>
        );
    }
}

export default ExpandableCard;