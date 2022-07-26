import React from 'react';
import {Center, Flex, Heading, HStack, PresenceTransition, ScrollView, Stack, Text, View} from "native-base";
import {useState} from "react";
import AntDesign from "react-native-vector-icons/AntDesign"


export const AnswersList = ({route, navigation}) => {
    const {base_number, question, answers} = route.params
    console.log(route.params)
    console.log(base_number)
    console.log(question)
    console.log(answers)
    const [isShow, setIsShow] = useState(true);
    return (
        <Center flex="1">
            <Flex flexDirection="column" w="90%" justifyContent="space-between" flex="1">
                <HStack  flexDirection="column" w="100%" flex="1">
                    <Center w="100%" h="30%" bg="danger.700"  rounded="md" my={2}>
                        {isShow && <Heading  color="gray.300" my={3} onPress={() => setIsShow(!isShow)}>
                            Вопрос № {base_number}
                        </Heading>}


                        <PresenceTransition  visible={!isShow} initial={{
                            opacity: 0,
                            scale: 0
                        }} animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 250
                            }
                        }}>
                            {!isShow && <Heading onPress={() => setIsShow(!isShow)}  minH="100" my="1" px={2} >
                                <Text style={{textAlign: "center"}}  fontSize="md" italic color="gray.300">
                                    {question}
                                </Text>
                            </Heading>}
                        </PresenceTransition>


                    </Center>

                    <ScrollView flex="1">
                        {answers.map((item, index) =>
                            (<Stack bg="primary.500" rounded="lg" direction="row" flex="1" key={item}
                                    justifyContent="space-around" mb={1}
                                    alignItems="center">
                                <View flex="1" >
                                    <Heading color={"gray.300"} bg={"red.700"} pl="5" w="10">{index+1}</Heading>
                                </View>
                                <Text color="white" flex="7" fontSize="md" p="3%">{item}</Text>
                            </Stack>)
                        )}
                    </ScrollView>

                </HStack>

                <Center h="15%" justifyContent="center">
                    <AntDesign name="leftcircle" onPress={() => {
                        navigation.goBack()
                    }}  size={50} color="blue"/>
                </Center>
            </Flex>
        </Center>
    )
}
