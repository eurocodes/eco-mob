import React from 'react'
import { StatusBar } from 'react-native';
import styled from 'styled-components';

import Text from '../components/Text'

const CardScreen = () => {
    const myCards = []
    return (
        <Container>
            <Text center large heavy margin="16px 0 0 0">
                My Cards
            </Text>
            <Cards />
            <StatusBar barStyle="light-content" />
        </Container>
    )
}

export default CardScreen;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Cards = styled.FlatList`

`;
