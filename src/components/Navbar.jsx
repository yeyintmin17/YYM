import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { NavbarNav } from './';
import mainLogo from '../utils/assets/icon/main_logo.svg';

const Navbar = ({ backBtn, nav, mainBtn }) => {
    return (
        <Stack 
            direction='row' justifyContent='space-between' alignItems='center' 
            px={{ md: 5, xs: 3 }} py={2}
            sx={{ backgroundColor: 'var(--body)', userSelect: 'none', position: 'sticky', zIndex: 50 }}
        >
            <Link to='/'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={mainLogo} alt='main_logo' width={100}/>
                </Box>
            </Link>
            
            {nav && <NavbarNav/>}
            {mainBtn && (<a href='#contact-section' className='main-btn'>Contact</a>)}
        </Stack>
    )
}

export default Navbar;