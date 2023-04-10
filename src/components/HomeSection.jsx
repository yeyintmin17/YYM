import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { HomeSectionTxts } from '../utils/constants';

const HomeSection = () => {
    return (
        <Box id='#home-section' py={12.5} sx={{ backgroundColor: 'var(--body)'}}>
            <Stack spacing={0.5} justifyContent='center' alignItems='center' sx={{ height: '100%', textAlign: 'center' }}>
                {
                    HomeSectionTxts.map(val => (
                        <Typography 
                            key={val.txt}
                            sx={{ width: val.width, color: val.color, fontSize: val.size }}
                            dangerouslySetInnerHTML={{ __html: val.txt }}
                            
                        />
                    ))
                }

                <a href='#contact-section' className='main-btn' style={{ marginTop: '20px' }}>Contact</a>
            </Stack>
        </Box>
    )
}

export default HomeSection;