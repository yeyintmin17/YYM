import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { NavbarNav } from './';
import mainLogo from '../assets/logo/main_logo_2.svg';

const Navbar = ({ backBtn, nav, mainBtn }) => {
    return (
        <Stack 
            direction='row' justifyContent='space-between' alignItems='center' 
            px={{ md: 5, xs: 3 }} py={2}
            sx={{ height: '10vh', backgroundColor: 'var(--body)', userSelect: 'none', position: 'sticky', left: 0, top: 0, zIndex: 50 }}
        >
            <Link to='/'>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={mainLogo} alt='Main Logo' />
                </Box>
            </Link>
            
            {nav && <NavbarNav/>}
            {mainBtn && (<a href='/#contact-section' className='main-btn'>Contact</a>)}
        </Stack>
    )
}

export default Navbar;