import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Grid } from '@mui/material';

import { Navbar, LeftSideBar, ProjectCard } from './';

const MoreProjects = () => {
    const { categories } = useParams();

    let categoryArr = [];
    if(categories === 'html' || categories === 'css' || categories === 'all'){
        categoryArr = [];
    }else{
        categoryArr = categories.split('&')
    }

    return (
        <Box>
            <Navbar nav={false} mainBtn={true}/>

            <Stack direction='row' height='90vh'>
                <Box width='200px'>
                    <LeftSideBar categoryArr={categoryArr}/>
                </Box>

                <Box flexGrow={1}>
                    <Grid container spacing={4}>
                        {
                            // projects.map(project => (               
                            //     <Grid key={project.name} item xs={12} sm={4}>
                            //         <ProjectCard project={project}/>
                            //     </Grid>      
                            // ))
                        }
                    </Grid>
                </Box>
            </Stack>
        </Box>
    )
}

export default MoreProjects;