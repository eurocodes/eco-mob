import React from 'react'
import { Dimensions, StatusBar } from 'react-native';
import styled from 'styled-components';
import { FontAwesome5, MaterialIcons, AntDesign } from '@expo/vector-icons'

import Text from '../components/Text';
import purchaseData from '../util/purchases';
import { LineChart } from 'react-native-chart-kit';

const HomeScreen = () => {
    const renderPurchase = ({ item }) => (
        <Purchase>
            <PurchaseInfo>
                <Text heavy>{item.product}</Text>
                <Text bold margin="2px 0 2px 0">{item.store}</Text>
                <Text small color="#727479">{item.address}</Text>
            </PurchaseInfo>
            <Text heavy>{item.price}</Text>
        </Purchase>
    )
    return (
        <Container >
            <Header>
                <ProfilePhoto source={require("../assets/profile.jpg")} />
                <Welcome>
                    <Text heavy medium>
                        Wecome,
                    </Text>
                    <Text>Ugochukwu Umeoke</Text>
                </Welcome>
                <FontAwesome5 name="cog" size={24} color="#565656" />
            </Header>
            <Text center title black>
                NGN 3,960,580.15
            </Text>
            <Text center heavy color="#727479">
                Current Balance
            </Text>

            <Chart>
                <LineChart data={{
                    labels: ["May", "June", "July", "Aug", "Sept", "Oct", "Nov"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                            ]
                        }
                    ]
                }}
                    width={Dimensions.get("window").width}
                    height={250}
                    yAxisLabel="NGN"
                    xAxisSuffix="k"
                    chartConfig={{
                        backgroundColor: "#1e1e1e",
                        backgroundGradientTo: "#1e1e1e",
                        color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
                        labelColor: () => `rgba(255, 255, 255, 0.2)`,
                        strokeWidth: 3
                    }}
                    withVerticalLines={false}
                    withHorizontalLines={false}
                    bezier
                />
            </Chart>

            <Purchases ListHeaderComponent={
                <>
                    <TransactionsHeader>
                        <Text>Last Purchases</Text>
                        <MaterialIcons name="sort" size={24} color="#5196f4" />
                    </TransactionsHeader>

                    <SearchContainer>
                        <AntDesign name="search1" color="#5196f4" />
                        <Search placeholder="Search Transactions" />
                    </SearchContainer>
                </>
            }
                data={purchaseData} renderItem={renderPurchase} showVerticalScrollIndicator={false}

            />

            <StatusBar barStyle="light-content" />
        </Container>
    )
}

export default HomeScreen;

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

const Welcome = styled.View`
    flex: 1;
    padding: 0 16px;
`;

const Chart = styled.View`
    margin: 32px 0;
`;

const Purchases = styled.FlatList`
    background-color: #2c2c2c;
    padding: 16px;
`;

const TransactionsHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SearchContainer = styled.View`
    background-color: #3d3d3d;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    border-radius: 6px;
    margin: 16px 0;
`;

const Search = styled.TextInput`
    flex: 1;
    padding: 8px 16px;
    /* font-family: "Avenir"; */
    color: #dbdbdb;
`;

const Purchase = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #393939;
    padding-bottom: 12px;
    margin-bottom: 12px;
`;

const PurchaseInfo = styled.View``;