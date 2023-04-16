import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import { homeSectionTxts } from '../utils/constants';

const HomeSection = ({ backgroundColor, py }) => {
    return (
        <Box id='home-section' py={py} sx={{ backgroundColor }}>
            <Stack spacing={0.5} justifyContent='center' alignItems='center' sx={{ height: '100%', textAlign: 'center' }}>
                {
                    homeSectionTxts.map((txt, idx) => (
                        <Typography 
                            key={idx}
                            sx={{ width: txt.width, color: txt.color, fontSize: txt.size }}
                            dangerouslySetInnerHTML={{ __html: txt.txt }}
                        />
                    ))
                }

                <a href='/#contact-section' className='btn main-btn' style={{ marginTop: '20px' }}>Contact</a>
            </Stack>
        </Box>
    )
}

export default HomeSection;