import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type OverlayProps = ModalProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: React.ComponentClass;
};
declare const Overlay: RneFunctionComponent<OverlayProps>;
export { Overlay };
declare const _default: React.FunctionComponent<Omit<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: React.ComponentClass<{}, any>;
} & Partial<import("../config").ThemeProps<OverlayProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<import("react-native").ModalBaseProps & import("react-native").ModalPropsIOS & import("react-native").ModalPropsAndroid & import("react-native").ViewProps & {
    isVisible: boolean;
    backdropStyle?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
    onBackdropPress?(): void;
    fullScreen?: boolean;
    ModalComponent?: React.ComponentClass<{}, any>;
} & Partial<import("../config").ThemeProps<OverlayProps>>>;
export default _default;
