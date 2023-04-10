import React from 'react';
import { Box } from '@mui/material';

import { SectionTitle } from './';

const ContactSection = ({ num, backgroundColor, py }) => {
    return (
        <Box id='contact-section' className='section' py={py} sx={{ backgroundColor }}>
            <SectionTitle 
                title='contact' 
                num={num} 
                top={py * 8 / 2}
                numColor='var(--body)' 
                titleColor='var(--black-non-active)'
                subtitleColor='var(--black)'
            />
            
        </Box>
    )
}

export default ContactSection;