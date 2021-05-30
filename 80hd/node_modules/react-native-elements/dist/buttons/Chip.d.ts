import React from 'react';
import { ButtonProps } from './Button';
export declare type ChipProps = Omit<ButtonProps, 'loading' | 'loadingStyle' | 'loadingProps'> & {
    type?: 'solid' | 'outline';
};
declare const Chip: React.FunctionComponent<ChipProps>;
export { Chip };
declare const _default: React.FunctionComponent<Omit<ChipProps, keyof import("../config").ThemeProps<T>>> | React.ForwardRefExoticComponent<ChipProps>;
export default _default;
