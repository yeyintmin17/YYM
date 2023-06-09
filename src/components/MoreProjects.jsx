import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Grid, Typography } from '@mui/material';

import { ProjectCard, LeftSideBar, CarouselControls } from './';
import { projects } from '../utils/constants';

const MoreProjects = () => {
    const { categories } = useParams();

    const [ collapsed, setCollapsed ] = useState(true);
    const [ carIdx, setCarIdx ] = useState(0);

    const leftSideBarWidth = { xs: '70%', sm: '300px' };

    let categoryArr = [];
    if(!(categories === 'all')) categoryArr = categories.split('&');

    let filterProjects = projects;
    if(!(categories === 'all')){
        filterProjects = projects.filter(project => (
            project.details.used.toLowerCase().replace(/\s/g, '').includes(categories.replace(/&/g, ','))
        ));
    }

    let finalProjects = [];
    const size = 12;
    for(let i = 0; i < filterProjects.length; i += size){
        const chunk = filterProjects.slice(i, i + size);
        finalProjects.push(chunk)
    }

    useEffect(() => setCarIdx(0), [categories]);

    return (
        <Stack 
            direction='row' 
            sx={{ 
                backgroundColor: 'var(--body-non-active)', 
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: "''",
                    width: '100%', height: '100%',
                    backgroundColor: 'var(--mirror)',
                    position: 'absolute',
                    left: 0, top: 0, zIndex: 1,
                    display: collapsed ? 'none' : 'block'
                } 
            }}
        >
            <LeftSideBar width={leftSideBarWidth} height='90vh' categoryArr={categoryArr} collapsed={collapsed} setCollapsed={setCollapsed} />

            <Box 
                flexGrow={1} 
                sx={{ 
                    height: '90vh',
                    position: 'relative',
                    left: collapsed ? '0px' : leftSideBarWidth,
                    transition: 'left 0.25s linear 0.25s'
                }}
            >
                <Box height={ filterProjects.length > size ? '90%' : '100%' } p="30px" sx={{ overflow: collapsed ? 'hidden auto' : 'hidden' }}>
                    <Grid container spacing={4} mb={3} >
                        {
                            filterProjects.length > 0 
                                ? 
                                    finalProjects[carIdx]?.map(finalProject => (               
                                        <Grid key={finalProject.details.name} item xs={12} sm={6} md={4}>
                                            <ProjectCard project={finalProject} url={`/more-projects/${categories}`}/>
                                        </Grid>      
                                    ))
                                : ( 
                                    <Typography
                                        variant='h6'
                                        style={{ 
                                            color: 'var(--white)', textAlign: 'center',
                                            position: 'absolute', left: '50%', top: '50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        Projects No Found
                                    </Typography> 
                                )
                        }
                    </Grid>
                </Box>

                <Box height={ filterProjects.length > size ? '10%' : '0%' } p="30px" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        filterProjects.length > size && (
                            <CarouselControls 
                                carIdx={carIdx} setCarIdx={setCarIdx} carLength={finalProjects.length}
                            />
                        )
                    }
                </Box>
            </Box>
        </Stack>
    )
}

export default MoreProjects;