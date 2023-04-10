import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcElectronics,
    FcMultipleDevices,
    FcServices,
    FcCommandLine,
    FcCircuit,
  } from 'react-icons/fc';
  
  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default function Skills() {
    return (
      <Box p={4} h={{xl: '100vh', sm: '130vh'}} id="skills">
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Skills
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Below are some of the key skills and technologies that I have experience with.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Frontend'}
              icon={<Icon as={FcMultipleDevices} w={10} h={10} />}
              description={
                'Javascript, React, React Native and Svelte'
              }
              href={'#'}
            />
            <Card
              heading={'Backend'}
              icon={<Icon as={FcServices} w={10} h={10} />}
              description={
                'Node Js, Django, Express and Deno'
              }
              href={'#'}
            />
            <Card
              heading={'Cyber Security'}
              icon={<Icon as={FcCommandLine} w={10} h={10} />}
              description={
                'Linux, CTF, Pentesting and Scripting'
              }
              href={'#'}
            />
            <Card
              heading={'Internet Of Things'}
              icon={<Icon as={FcCircuit} w={10} h={10} />}
              description={
                'Raspberry Pi, Arduino IDE, Thinkspeak and Nvidia Jetson'
              }
              href={'#'}
            />
            <Card
              heading={'Machine Learning'}
              icon={<Icon as={FcElectronics} w={10} h={10} />}
              description={
                'Pandas, Scikit Learn, OpenCV and Keras'
              }
              href={'#'}
            />
          </Flex>
        </Container>
      </Box>
    );
  }