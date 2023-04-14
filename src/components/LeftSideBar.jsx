import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Button } from '@mui/material';
import { projects, projectCategories } from '../utils/constants';

const LeftSideBar = ({ categoryArr }) => {
    const [ categories, setCategories ] = useState(categoryArr);
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
        <Box sx={{ height: '100%', backgroundColor: 'var(--body)', py: '30px' }}>
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
                                        backgroundColor: 'var(--black)', 
                                        color: 'var(--primary)',
                                        display: 'block',
                                        textTransform: 'none'
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
    )
}

export default LeftSideBar;