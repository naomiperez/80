import React from 'react';
import { StyleProp, TouchableHighlightProps, ViewStyle } from 'react-native';
import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
import ListItemAccordion from './ListItemAccordion';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemProps = TouchableHighlightProps & {
    containerStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
};
interface ListItem extends RneFunctionComponent<ListItemProps> {
    Accordion: typeof ListItemAccordion;
    Chevron: typeof ListItemChevron;
    Content: typeof ListItemContent;
    Input: typeof ListItemInput;
    Title: typeof ListItemTitle;
    Subtitle: typeof ListItemSubtitle;
    CheckBox: typeof ListItemCheckBox;
    ButtonGroup: typeof ListItemButtonGroup;
}
declare const ListItem: ListItem;
export { ListItem };
declare const ThemedListItem: (React.FunctionComponent<Omit<TouchableHighlightProps & {
    containerStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<TouchableHighlightProps & {
    containerStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
} & Partial<import("../config").ThemeProps<ListItemProps>>>) & {
    Accordion: React.FunctionComponent<Omit<TouchableHighlightProps & {
        containerStyle?: StyleProp<ViewStyle>;
        disabledStyle?: StyleProp<ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof React.Component;
        ViewComponent?: typeof React.Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../icons/Icon").IconNode;
        expandIcon?: import("../icons/Icon").IconNode;
        content?: React.ReactNode;
        noAnimation?: boolean;
        noRotation?: boolean;
        noIcon?: boolean;
        animationDuration?: number;
    } & Partial<import("../config").ThemeProps<import("./ListItemAccordion").ListItemAccordionProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<TouchableHighlightProps & {
        containerStyle?: StyleProp<ViewStyle>;
        disabledStyle?: StyleProp<ViewStyle>;
        topDivider?: boolean;
        bottomDivider?: boolean;
        pad?: number;
        Component?: typeof React.Component;
        ViewComponent?: typeof React.Component;
        linearGradientProps?: any;
        children?: any;
    } & {
        isExpanded?: boolean;
        icon?: import("../icons/Icon").IconNode;
        expandIcon?: import("../icons/Icon").IconNode;
        content?: React.ReactNode;
        noAnimation?: boolean;
        noRotation?: boolean;
        noIcon?: boolean;
        animationDuration?: number;
    } & Partial<import("../config").ThemeProps<import("./ListItemAccordion").ListItemAccordionProps>>>;
    Chevron: React.FunctionComponent<Omit<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<Partial<import("..").IconProps> & Partial<import("../config").ThemeProps<Partial<import("..").IconProps>>>>;
    Content: React.FunctionComponent<Omit<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    }>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        style?: StyleProp<import("react-native").TextStyle>;
        h1?: boolean;
        h2?: boolean;
        h3?: boolean;
        h4?: boolean;
        h1Style?: StyleProp<import("react-native").TextStyle>;
        h2Style?: StyleProp<import("react-native").TextStyle>;
        h3Style?: StyleProp<import("react-native").TextStyle>;
        h4Style?: StyleProp<import("react-native").TextStyle>;
    } & {
        right?: boolean;
    }>>>;
    Input: React.FunctionComponent<Omit<import("react-native").TextInputProps & React.RefAttributes<import("react-native").TextInput> & {
        containerStyle?: StyleProp<ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: StyleProp<ViewStyle>;
        leftIcon?: any;
        leftIconContainerStyle?: StyleProp<ViewStyle>;
        rightIcon?: any;
        rightIconContainerStyle?: StyleProp<ViewStyle>;
        inputStyle?: object | any[];
        InputComponent?: typeof React.Component;
        errorProps?: object;
        errorStyle?: object | any[];
        errorMessage?: string;
        label?: React.ReactNode;
        labelStyle?: object | any[];
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TextInputProps & React.RefAttributes<import("react-native").TextInput> & {
        containerStyle?: StyleProp<ViewStyle>;
        disabled?: boolean;
        disabledInputStyle?: StyleProp<import("react-native").TextStyle>;
        inputContainerStyle?: StyleProp<ViewStyle>;
        leftIcon?: any;
        leftIconContainerStyle?: StyleProp<ViewStyle>;
        rightIcon?: any;
        rightIconContainerStyle?: StyleProp<ViewStyle>;
        inputStyle?: object | any[];
        InputComponent?: typeof React.Component;
        errorProps?: object;
        errorStyle?: object | any[];
        errorMessage?: string;
        label?: React.ReactNode;
        labelStyle?: object | any[];
        labelProps?: object;
        renderErrorMessage?: boolean;
    } & Partial<import("../config").ThemeProps<import("..").InputProps>>>;
    Title: React.FunctionComponent<Omit<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    Subtitle: React.FunctionComponent<Omit<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TextProps & {
        right?: boolean;
    } & Partial<import("../config").ThemeProps<import("react-native").TextProps & {
        right?: boolean;
    }>>>;
    CheckBox: React.FunctionComponent<Omit<import("react-native").TouchableOpacityProps & import("../checkbox/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof React.Component;
        iconRight?: boolean;
        title?: string | React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: StyleProp<ViewStyle>;
        wrapperStyle?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").TouchableOpacityProps & import("../checkbox/CheckBoxIcon").CheckBoxIconProps & {
        Component?: typeof React.Component;
        iconRight?: boolean;
        title?: string | React.ReactElement<{}, string | React.JSXElementConstructor<any>>;
        titleProps?: import("react-native").TextProps;
        center?: boolean;
        right?: boolean;
        containerStyle?: StyleProp<ViewStyle>;
        wrapperStyle?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<import("react-native").TextStyle>;
        checkedTitle?: string;
        fontFamily?: string;
    } & Partial<import("../config").ThemeProps<import("..").CheckBoxProps>>>;
    ButtonGroup: React.FunctionComponent<Omit<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("..").ButtonGroupProps & Partial<import("../config").ThemeProps<import("..").ButtonGroupProps>>>;
};
export default ThemedListItem;
