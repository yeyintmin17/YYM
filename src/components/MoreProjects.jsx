import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Grid } from '@mui/material';

import { Navbar, LeftSideBar, ProjectCard } from './';
import { projects } from '../utils/constants';

const MoreProjects = () => {
    const { categories } = useParams();

    let categoryArr = [];
    if(!(categories === 'all')) categoryArr = categories.split('&');

    let filterProjects = [];
    if(categories === 'all'){
        filterProjects = projects;
    }else{
        filterProjects = projects.filter(project => (
            project.used.replace(/\s/g, '').toLowerCase().includes(categories.replace(/&/g, ','))
        ));
    }

    return (
        <Box>
            <Navbar nav={false} mainBtn={true}/>

            <Stack direction='row' height='90vh' sx={{ position: 'relative' }}>
                <LeftSideBar categoryArr={categoryArr}/>

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