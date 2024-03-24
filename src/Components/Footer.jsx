import {
    Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'


function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" 
    color={'white'}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w={"full"} p={'4'}>
                <Heading size="md" textTransform={'uppercase'}>
                    Subscribe to get updates
                </Heading>
                <HStack 
                borderBottom={"2px solid white"}
                py="2">
                    <Input placeholder='Enter Email here' 
                    border={"none"}
                    borderRadius={"none"}
                    outline={"none"}
                    focusBorderColor='none'
                    />
                    <Button
                    p={"0"}
                    colorScheme={"purple"}
                    variant={"ghost"}
                    borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack 
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            bordeRight={["none", "1px solid white"]}>
              <Heading textTransform={"uppercase"} textAlign={'center'}>
                VIDEO HUB
              </Heading>
              <Text>
                All rights received
              </Text>
            </VStack>

            <VStack 
            w={"full"}
            borderLeft={["none", "1px solid white"]}
            bordeRight={["none", "1px solid white"]}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={"link"} colorScheme={"purple"}>
                    <a target='_blank' href='https://youtube.com/6packprogrammer'>
                        Youtube
                    </a>
                </Button>
                <Button variant={"link"} colorScheme={"purple"}>
                    <a target='_blank' href='https://youtube.com/6packprogrammer'>
                        Instagram
                    </a>
                </Button>
                <Button variant={"link"} colorScheme={"purple"}>
                    <a target='_blank' href='https://youtube.com/6packprogrammer'>
                        Github
                    </a>
                </Button>
            </VStack>

        </Stack>
    </Box>
  )
}

export default Footer