import React from 'react';
import { Box, Typography } from '@mui/material';

import { navLinks } from '../utils/constants';

const SectionTitle = ({ title, num, top, numColor, titleColor, subtitleColor }) => {
    const targetItem = navLinks.find(val => val.title === title);

    return (
        <Box mb={13}>
            <Box sx={{ textAlign: 'center', textTransform: 'capitalize', letterSpacing: 1.5 }}>
                <Typography 
                    variant='subtitle1'
                    sx={{
                        color: titleColor,
                        fontWeight: 700,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    {targetItem.icon}
                    <span>{targetItem.title}</span>
                </Typography>

                <Typography 
                    variant='h6'
                    sx={{
                        color: subtitleColor,
                        fontWeight: 700
                    }}
                >
                    {targetItem.subtitle}
                </Typography>
            </Box>

            <span style={{ 
                color: numColor, 
                fontSize: 15, 
                fontWeight: 700,
                position: 'absolute',
                left: 0,
                top
            }}>
                -- 0{num}
            </span>
        </Box>
    )
}

export default SectionTitle;