import React from 'react';
import {Center, Flex, Heading, Stack, Text, View} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign"

export const ErrorNumber = ({navigation}) => {
    return (
        <Center
            bg="primary.700"
            _dark={{bg: "blueGray.900"}}
            _light={{bg: "blueGray.50"}}
            px={4}
            pt={20}
            flex={1}
            h="100%">
            <Stack h="100%" alignItems="center" justifyContent="space-between" flex={1}>
                <Flex h="85%"  alignItems="center" fontSize={25}>
                    <Heading style={{textAlign:"center"}}>В базе приложения отсутствует ответ на вопрос с таким номером!</Heading>
                </Flex>
                <View h="15%">
                    <AntDesign name="leftcircle" onPress={() => {
                        navigation.navigate('Home')
                    }}  size={45} color="blue"/>
                </View>
            </Stack>
        </Center>


    )
}
