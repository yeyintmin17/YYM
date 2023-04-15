import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Grid } from '@mui/material';

import { Navbar, LeftSideBar, ProjectCard } from './';
import { projects } from '../utils/constants';

const MoreProjects = () => {
    const { categories } = useParams();
    const [ collapsed, setCollapsed ] = useState(true);

    let categoryArr = [];
    if(!(categories === 'all')) categoryArr = categories.split('&');

    let filterProjects = projects;
    if(!(categories === 'all')){
        filterProjects = projects.filter(project => (
            project.used.replace(/\s/g, '').toLowerCase().includes(categories.replace(/&/g, ','))
        ));
    }

    const leftSideBarWidth = { xs: '70%', sm: '300px' };

    return (
        <Box>
            <Navbar nav={false} mainBtn={true}/>

            <Stack direction='row' sx={{ position: 'relative' }}>
                <LeftSideBar width={leftSideBarWidth} height='90vh' categoryArr={categoryArr} collapsed={collapsed} setCollapsed={setCollapsed} />

                <Box 
                    p="30px" flexGrow={1} 
                    sx={{ 
                        height: '90vh',
                        backgroundColor: 'var(--body-non-active)', 
                        overflow: collapsed ? 'hidden auto' : 'hidden',
                        position: 'relative',
                        '&::before': {
                            content: "''",
                            backgroundColor:  'var(--mirror)',
                            position: 'absolute',
                            left: 0, top: 0, right: 0, bottom: 0,
                            zIndex: 1,
                            backgroundColor: 'var(--mirror)',
                            display: collapsed ? 'none' : 'block'
                        }
                    }}
                >
                    <Grid 
                        container spacing={4}
                        sx={{
                            position: 'relative',
                            left: collapsed ? '0px' : leftSideBarWidth,
                            transition: 'left 0.25s linear 0.25s'
                        }}
                    >
                        {
                            filterProjects.map(filterProject => (               
                                <Grid key={filterProject.name} item xs={12} sm={6} md={4}>
                                    <ProjectCard project={filterProject}/>
                                </Grid>      
                            ))
                        }
                    </Grid>
                </Box>
            </Stack>
        </Box>
    )
}

export default MoreProjects;