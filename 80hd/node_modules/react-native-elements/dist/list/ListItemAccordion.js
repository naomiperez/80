var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Animated } from 'react-native';
import { ListItem } from './ListItem';
import { withTheme } from '../config';
import { Icon } from '../icons/Icon';
const Accordion = (_a) => {
    var { children, isExpanded, icon, expandIcon, content, noAnimation, noRotation, noIcon, animationDuration = 350 } = _a, props = __rest(_a, ["children", "isExpanded", "icon", "expandIcon", "content", "noAnimation", "noRotation", "noIcon", "animationDuration"]);
    const { current: animation } = React.useRef(new Animated.Value(0));
    const startAnimation = React.useCallback(() => {
        Animated.timing(animation, {
            toValue: Number(isExpanded),
            useNativeDriver: false,
            duration: animationDuration,
        }).start();
    }, [isExpanded, animation, animationDuration]);
    React.useEffect(() => {
        if (noAnimation) {
            return;
        }
        startAnimation();
    }, [isExpanded, startAnimation, noAnimation]);
    const rotate = noRotation
        ? '0deg'
        : animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-180deg'],
        });
    return (<>
      <ListItem {...props}>
        {React.isValidElement(content) ? content : <ListItem.Content />}
        {!noIcon && (<Animated.View style={{
                transform: [
                    {
                        rotate,
                    },
                ],
            }}>
            {icon ? (<Icon {...(expandIcon
                ? isExpanded
                    ? expandIcon
                    : icon
                : icon)}/>) : (<Icon name={'chevron-down'} type="material-community"/>)}
          </Animated.View>)}
      </ListItem>
      <Animated.View style={[
            {
                maxHeight: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                }),
                opacity: animation,
            },
            noAnimation && {
                maxHeight: isExpanded ? '100%' : '0%',
            },
        ]}>
        {children}
      </Animated.View>
    </>);
};
export default withTheme(Accordion, 'ListItemAccordion');
