import React from 'react';
import { SwitchProps as NativeSwitchProps } from 'react-native';
import { FullTheme } from '../config/theme';
export declare type SwitchProps = NativeSwitchProps & {
    color?: string;
    theme?: FullTheme;
};
declare const Switch: React.FunctionComponent<SwitchProps>;
export { Switch };
declare const _default: React.FunctionComponent<Omit<NativeSwitchProps & {
    color?: string;
    theme?: FullTheme;
}, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<NativeSwitchProps & {
    color?: string;
    theme?: FullTheme;
}>;
export default _default;
