import * as React from "react";
import { NeuView, NeuInput, NeuButton, NeuSwitch, NeuSpinner, NeuBorderView } from "react-native-neu-element";
import { Easing } from "react-native-reanimated";

class NeuElementTest extends React.Component {
    render() {
        return (
            <>
                <NeuView color="#123" height={100} width={100} />
                <NeuInput color="#123" height={100} width={100} />
                <NeuButton color="#123" height={100} width={100} />
                <NeuSwitch
                    color="#123"
                    height={100}
                    width={100}
                    isPressed={true}
                    setIsPressed={() => {}}
                    buttonWidth={1}
                    buttonHeight={1}
                    containerHeight={1}
                    containerWidth={1}
                />
                <NeuSpinner color="#123" height={100} width={100} indicatorColor="#123" size={1} easingType={Easing.linear} />
                <NeuBorderView color="#123" height={100} width={100} borderRadius={2} borderWidth={1} style={{}} containerStyle={{}}/>
            </>
        );
    }
}
