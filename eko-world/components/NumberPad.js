import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styled from 'styled-components';

import Text from './Text';
import { Dimensions } from 'react-native';

const NumberPad = ({ onPress }) => {
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        <MaterialIcons name="keyboard-backspace" size={24} />
    ]
    return (
        <KeyPad>
            {buttons.map((btn, index) => {
                return (
                    <Number key={index} onPress={() => onPress(btn, index)} delayPressIn={0}>
                        <Text large heavy>
                            {btn}
                        </Text>
                    </Number>
                )
            })}
        </KeyPad>
    )
}

export default NumberPad;

const { width } = Dimensions.get("screen");

const KeyPad = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    margin: 0 ${Math.floor(width * 0.13)}px;
`;

const Number = styled.TouchableOpacity`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    align-items: center;
    justify-content: center;
    margin: 10px 20px;
    border-width: 1px;
    border-color: #fff;
`;