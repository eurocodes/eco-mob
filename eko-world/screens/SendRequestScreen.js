import React from 'react'
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Text from '../components/Text';


const SendRequestScreen = () => {
    return (
        <Container >
            <Text>Send Request Screen</Text>

            <StatusBar barStyle="light-content" />
        </Container>
    )
}

export default SendRequestScreen;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;
