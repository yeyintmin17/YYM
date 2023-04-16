import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Button, IconButton } from '@mui/material';

import { projectCategories } from '../utils/constants';

const LeftSideBar = ({ width, height, categoryArr, collapsed, setCollapsed }) => {
    const [ categories, setCategories ] = useState([]);
    const navigate = useNavigate();

    const addCategory = (category) => {
        const existIdx = categories.indexOf(category);
        existIdx < 0 
            ? categories.push(category)
            : categories.splice(existIdx, 1);

        setCategories([...categories]);

        const url = categories.join('&');
        navigate(`/more-projects/${url.length > 0 ? url : 'all'}`);
    }

    useEffect(() => setCategories(categoryArr), [categoryArr])

    return (
        <Box 
            sx={{ 
                width, height, 
                position: 'absolute', left: 0, top: 0, zIndex: 200,
                transform: collapsed ? 'translateX(-100%)' : 'translateX(0%)',
                transition: 'transform 0.25s ease-out 0.3s'
            }}
        >
            <Box sx={{ height: '100%', backgroundColor: 'var(--body)', py: '30px', overflowY: 'auto' }}>
                <Box width='80%' mx='auto'>
                    <Typography className='left-side-bar-title'>Select Project By -</Typography>

                    <Stack gap='10px'>
                        {
                            projectCategories.map(projectCategory => {
                                const fixedProjectCategory = projectCategory.toLowerCase().replace(/\s/g, '');

                                return(
                                    <Button 
                                        key={projectCategory} 
                                        variant='contained'
                                        onClick={() => addCategory(fixedProjectCategory)}
                                        sx={{
                                            width: '100%',

                                            backgroundColor: categories.indexOf(fixedProjectCategory) > -1 
                                                ? 'var(--primary) !important' 
                                                : 'var(--black) !important', 
                                            color: categories.indexOf(fixedProjectCategory) > -1 
                                                ? 'var(--black) !important' 
                                                : 'var(--white-non-active) !important',

                                            display: 'block',
                                        }}
                                    >
                                        {projectCategory}
                                    </Button>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Box>

            <IconButton
                color='primary'
                sx={{ 
                    position: 'absolute', right: '0', top: '10px',  zIndex: 300,
                    transform: 'translateX(70%)',
                }}
                onClick={() => setCollapsed(!collapsed)}
            >
                <i 
                    className="fa-solid fa-anchor"
                    style={{ 
                        transform: collapsed ? 'rotate(-90deg)' : 'rotate(90deg)',
                        transition: 'transform 0.25s ease-in-out'
                    }}
                />
            </IconButton>
        </Box>
    )
}

export default LeftSideBar;