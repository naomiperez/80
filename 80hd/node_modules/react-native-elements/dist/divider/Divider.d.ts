import React from 'react';
import { ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type DividerProps = ViewProps & {
    style?: object | any[];
};
declare const Divider: RneFunctionComponent<DividerProps>;
export { Divider };
declare const _default: React.FunctionComponent<Omit<ViewProps & {
    style?: object | any[];
} & Partial<import("../config").ThemeProps<DividerProps>>, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<ViewProps & {
    style?: object | any[];
} & Partial<import("../config").ThemeProps<DividerProps>>>;
export default _default;
