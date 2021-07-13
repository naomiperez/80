import React from 'react';
import { Text, View, Image, TouchableHighlight, Animated } from 'react-native';
import dropdown from '../../assets/images/dropdown.png'
import styles from './styles';

class ExpandableCard extends React.Component {
  anime = {
    height: new Animated.Value(60),
    expanded: false,
    contentHeight: 0,
  }

  constructor(props) {
    super(props);

    this.initContentHeight = this.initContentHeight.bind(this);
    this.toggle = this.toggle.bind(this);

    this.anime.expanded = props.expanded;
    this.state = {
      expanded: props.expanded,
    }

    this.anime.height = new Animated.Value(props.expandHeight);
  }

  getMaxValue() {
    return this.anime.contentHeight;
  }

  getMinValue() {
    return 0;
  }

  initContentHeight(evt) {
    if (this.anime.contentHeight > 0) return;
    this.anime.contentHeight = evt.nativeEvent.layout.height;
    this.anime.height.setValue(this.anime.expanded ? this.getMaxValue() : this.getMinValue());
  }

  /*  */
  toggle() {
    Animated.timing(this.anime.height, {
      toValue: this.anime.expanded ? this.getMinValue() : this.getMaxValue(),
      duration: 90,
      useNativeDriver: false,
    }).start()
    this.anime.expanded = !this.anime.expanded;

    // Wait for container View to expand before rendering the Selection Options
    if (this.state.expanded === false) {
      setTimeout(() => {
        this.setState((prevState) => ({
          expanded: !prevState.expanded,
        }))
      }, 90)
    } else {
      this.setState((prevState) => ({
        expanded: !prevState.expanded,
      }))
    }
  }

  // The outermost View is the Card, the second View is the flex container,
  // then the Text is the title of the card, the TouchableHighlight is the 'expand' button,
  // and the Animated.View is the expanded View that has a dynamic height and displays the
  // Logger Selection options
  render() {
    const { expanded } = this.state;
    const { children, cardTitle } = this.props;
    console.log(expanded);
    return (
      <View style={styles.container}>
        <View style={styles.inlineStyle}>
          <Text style={styles.text}>{cardTitle}</Text>
          <TouchableHighlight underlayColor="transparent" onPress={this.toggle}>
            <Image style={styles.img} source={dropdown} />
          </TouchableHighlight>
        </View>
        <Animated.View 
        style={[{ height: this.anime.height }]} 
        onLayout={this.initContentHeight}
        >
          {expanded === true ? children : <View></View>}
        </Animated.View>
      </View>
    )
  }
}

export default ExpandableCard;
