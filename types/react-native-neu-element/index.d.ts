// Type definitions for react-native-neu-element 1.1
// Project: https://github.com/Jamyth/react-native-neu-element#readme
// Definitions by: kp <https://github.com/kherP>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import { TextInputProps, TouchableWithoutFeedbackProps } from "react-native";
import Animated from "react-native-reanimated";
interface BasicProps {
    color: string,
    width: number,
    height: number,
}

export interface NeuViewProps extends BasicProps {
    radius?: number,
    children?: React.ReactNode,
    customLightShadow?: {},
    customDarkShadow?: {},
    customInsetLightShadow?: {},
    customInsetDarkShadow?: {},
    borderRadius?: number,
    customGradient?: Array<string>,
    style?: {},
    containerStyle?: {},
    inset?: boolean,
    convex?: boolean,
    concave?: boolean,
    noShadow?: boolean
}

export const NeuView: React.FunctionComponent<NeuViewProps>;

export type NeuInputProps = NeuViewProps & TextInputProps & {
    textStyle?: {},
    placeholder?: string,
    prefix?: React.ReactNode
};

export const NeuInput: React.FunctionComponent<NeuInputProps>;

export type NeuButtonProps = NeuViewProps & TouchableWithoutFeedbackProps & {
    isConves?: boolean;
    active?: boolean;
};

export const NeuButton: React.FunctionComponent<NeuButtonProps>;

export type NeuSwitchProps = NeuViewProps & {
    isPressed: boolean,
    setIsPressed: () => void,
    containerWidth: number,
    containerHeight: number,
    buttonWidth: number,
    buttonHeight: number
};

export const NeuSwitch: React.FunctionComponent<NeuSwitchProps>;

export type NeuSpinnerProps = NeuViewProps & {
    indicatorColor: string,
    duration?: number,
    size: number,
    easingType: Animated.EasingFunction
};

export const NeuSpinner: React.FunctionComponent<NeuSpinnerProps>;

export type NeuBorderViewProps = BasicProps & {
    borderRadius: number,
    borderWidth: number,
    children?: React.ReactNode,
    containerStyle: {},
    customLightShadow?: {},
    customDarkShadow?: {},
    customInsetLightShadow?: {},
    customInsetDarkShadow?: {},
    style: {}
};

export const NeuBorderView: React.FunctionComponent<NeuBorderViewProps>;
