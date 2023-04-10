import ProjectCard from './ProjectCard';
import { client } from '../client';
import { useState, useEffect } from 'react';
import { SimpleGrid, Box, Stack, Heading, Container, Text } from '@chakra-ui/react'


const Projects = () => {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        client.fetch(
          `*[_type == "projects"]`
        )
          .then((data) => {
              setProjectData(data)
          })
          .catch(console.error);
      }, []);
    if(projectData){
        return (
            <Box p={4} h={{ sm:'auto',md:'100vh'}} id="projects">
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                    <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                        Projects
                    </Heading>
                    <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
                        Here are some projects that I have done.
                    </Text>
                </Stack>
                <SimpleGrid columns={[1, null, 3]} spacing='40px' p={5}>
                    {projectData.map((project)=>{
                        return <ProjectCard project={project}/>
                    })}
                </SimpleGrid>
            </Box>
        )
    }
    else{
        return(
            <Box>Loading</Box>
        )
    }

}

export default Projects;