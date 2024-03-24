import React from 'react'
import {Container, VStack, Input, Heading, Button, Text, Avatar} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <Container maxW={"container.xl"}
    h={"100vh"} p={"16"}>
        <form>
        <VStack alignItems={"stretch"}
        spacing={"4"} w={['full', '96']}
        m={"auto"}>
        <Heading>
            Video Hub
        </Heading>

        <Avatar alignSelf={"center"} boxSize={'32'}/>
        <Input placeholder={"Name"} 
        type={'name'} required 
        focusBorderColor={"purple.500"}/>
        <Input placeholder={"Email"} 
        type={'email'} required 
        focusBorderColor={"purple.500"}/>
        <Input placeholder={"Password"} 
        type={'password'} required 
        focusBorderColor={"purple.500"}/>
        
        <Button variant={"link"} alignSelf={'flex-end'}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
        </Button>

        <Button colorScheme='purple' type='submit'>Log In</Button>
        <Text textAlign={'right'}>Already Signed Up? {' '}
        <Button variant={"link"} alignSelf={'flex-end'}>
            <Link to={"/signup"}>Log in</Link>
        </Button>
        </Text>
        </VStack>
        </form>
    </Container>
  )
}
