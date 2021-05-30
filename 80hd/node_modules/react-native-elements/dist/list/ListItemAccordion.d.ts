import React from 'react';
import { ListItemProps } from './ListItem';
import { IconNode } from '../icons/Icon';
export declare type ListItemAccordionProps = ListItemProps & {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noAnimation?: boolean;
    noRotation?: boolean;
    noIcon?: boolean;
    animationDuration?: number;
};
declare const _default: React.FunctionComponent<Omit<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noAnimation?: boolean;
    noRotation?: boolean;
    noIcon?: boolean;
    animationDuration?: number;
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TouchableHighlightProps & {
    containerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    disabledStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
} & {
    isExpanded?: boolean;
    icon?: IconNode;
    expandIcon?: IconNode;
    content?: React.ReactNode;
    noAnimation?: boolean;
    noRotation?: boolean;
    noIcon?: boolean;
    animationDuration?: number;
} & Partial<import("../config").ThemeProps<ListItemAccordionProps>>>;
export default _default;
