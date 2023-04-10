import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  IconButton,
  Link
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '../client';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function ProjectCard({ project }) {
  console.log(project)
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={{sm:'90%', md:'70%'}}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'225px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              urlFor(project.mainImage).url()
            }
            h={'225px'}
            w={'full'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {project.category}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {project.title}
          </Heading>
          <Text color={'gray.500'}>
            {project.body[0].children[0].text}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Link target="_blank" rel="noopener noreferrer"  href={project.github}>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<BsGithub />}
              _hover={{
                bg: 'green.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}