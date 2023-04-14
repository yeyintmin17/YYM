import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Button, IconButton } from '@mui/material';
import { projectCategories } from '../utils/constants';

const LeftSideBar = ({ categoryArr }) => {
    const [ categories, setCategories ] = useState(categoryArr);
    const [ collapsed, setCollapsed ] = useState(true);

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

    return (
        <Box 
            sx={{ 
                width: '200px', height: '100%', 
                position: 'absolute',
                left: collapsed ? '-200px' : 0, 
                top: 0, zIndex: 200,
                transition: 'left 0.25s ease-in-out'
            }}
        >
            <Box sx={{ height: '100%', backgroundColor: 'var(--body)', py: '30px', overflowY: 'auto' }}>
                <Box width='80%' mx='auto'>
                    <Typography className='left-side-bar-title'>Select Project By -</Typography>

                    <Stack gap='10px'>
                        {
                            projectCategories.map(projectCategory => {
                                const fixedProjectCategory = projectCategory.replace(/\s/g, '').toLowerCase();

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
                                            textTransform: 'none',
                                            boxShadow: 'none !important'
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
                className='main-icon-btn' 
                sx={{ 
                    position: 'fixed', 
                    left: collapsed ? '0px' : '200px', 
                    top: 'calc(10vh + 10px)', 
                    zIndex: 300,
                    transform: 'translateX(-30%)',
                    transition: 'left 0.25s ease-in-out'
                }}
                onClick={() => setCollapsed(!collapsed)}
            >
                <i 
                    className="fa-solid fa-anchor"
                    style={{ 
                        transform: collapsed ? 'rotate(45deg)' : 'rotate(90deg)',
                        transition: 'transform 0.25s ease-in-out 0.25s'
                    }}
                />
            </IconButton>
        </Box>
    )
}

export default LeftSideBar;