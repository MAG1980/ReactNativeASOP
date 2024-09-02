import React, {useState} from 'react';
import {
    Alert,
    Center,
    Flex,
    Heading,
    HStack,
    PresenceTransition,
    ScrollView,
    Slide,
    Stack,
    Text,
    View
} from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign"


export const AnswersList = ({route, navigation}) => {
    const {base_number, question, answers} = route.params
    console.log(route.params)
    console.log(base_number)
    console.log(question)
    console.log(answers)
    const [isOpenTop, setIsOpenTop] = useState(false);
    return (
        <Center flex="1">
            <Flex flexDirection="column" w="90%" justifyContent="space-between" flex="1">
                <HStack flexDirection="column" w="100%" flex="1">

                    <Slide in={isOpenTop} placement="top">
                        <Alert justifyContent="center" status="success">
                            <Alert.Icon/>
                            <Text color="error.600" fontWeight="medium">
                                {question}
                            </Text>
                        </Alert>
                    </Slide>


                    <Center flex="0.2" w="100%" bg="danger.700" rounded="md" my={2}>
                        <PresenceTransition visible={true} initial={{
                            translateY: -100
                        }} animate={{
                            translateY: 0,
                            transition: {
                                duration: 500
                            }
                        }}>
                        <Heading style={{textAlign: "center"}} w="300" color="gray.300" my={3}
                                 onPress={() => setIsOpenTop(!isOpenTop)}>
                            Вопрос № {base_number}
                        </Heading>
                        </PresenceTransition>
                    </Center>


                    <ScrollView flex="1">
                        {answers.map((item, index) => (
                            <PresenceTransition visible={true} initial={{
                                translateX: -300
                            }} animate={{
                                translateX: 0,
                                transition: {
                                    duration: 300
                                }
                            }}>
                                <Stack bg="primary.500" rounded="lg" direction="row" flex="1" key={item}
                                       justifyContent="space-around" mb={1}
                                       alignItems="center">
                                    <View flex="1">
                                        <Heading color={"gray.300"} bg={"red.700"} pl="5" w="10">{index + 1}</Heading>
                                    </View>
                                    <Text color="white" flex="7" fontSize="md" p="3%">{item}</Text>
                                </Stack>
                            </PresenceTransition>)
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
