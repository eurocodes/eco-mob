import React from 'react';
import { StatusBar } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

import styled from 'styled-components';
import Text from '../components/Text';


const TouchScreen = ({ navigation }) => {
    return (
        <Container>
            <StatusBar backgroundColor="#1e1e1e" barStyle="light-content" />
            <Text title center heavy color="#964ff0" margin="32px 0 0 0">
                eko World
            </Text>

            <Touchable onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
                <Circle bgColor="#1e1e1e">
                    <Circle bgColor="#5196F405">
                        <Circle bgColor="#5196F410">
                            <Circle bgColor="#5196F430">
                                <TouchButton>
                                    <MaterialIcons name="fingerprint" size={64} color="#fff" />
                                </TouchButton>
                            </Circle>
                        </Circle>
                    </Circle>
                </Circle>
            </Touchable>

            <Text center heavy large>
                Touch ID sensor for access to {"\n"}your eko World dashboard
            </Text>
            <Text center blod margin="16px 0 0 0" color="#9c9c9f">
                Please verify your identity{"\n"}using Touch ID
            </Text>

            <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
                <Fontisto name="locked" color="#964ff0" size={16} />
                <Text bold margin="0 0 8px 10px" color="#964ff0">Enter Access Pin</Text>
            </PinAccess>
        </Container>
    )
}

export default TouchScreen

const Container = styled.SafeAreaView`
flex: 1;
background-color: #1e1e1e;
`;

const Touchable = styled.TouchableOpacity`
flex: 1;
align-items: center;
justify-content: center;
`;

const Circle = styled.View`
background-color: ${(props) => props.bgColor};
padding: 32px;
border-radius: 999px;
`;

const TouchButton = styled.TouchableOpacity`
    background-color: #5196f4;
    padding: 8px;
    border-radius: 100px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 16px;
    flex-direction: row;
    justify-content: center;
`;