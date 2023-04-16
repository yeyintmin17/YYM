import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import { Box, Stack, IconButton } from '@mui/material';

import { navLinks } from '../utils/constants';

const NavbarNav = () => {
    const { hash } = useLocation();

    let fixedHash = hash.includes('#') 
        ? hash.substring(1, hash.indexOf('-'))
        : 'home';

    const [ navTxt, setNavTxt ] = useState(fixedHash);
    const [ collapsed, setCollapsed ] = useState(true);
    
    const handleCollapsed = () => {
        window.innerWidth < 900 ? setCollapsed(true) : setCollapsed(false);
    }
    window.addEventListener('resize', handleCollapsed);

    const chNavLink = () => {
        if(hash.includes('#')){
            const hashTag = document.querySelector(hash);
            if(hashTag) hashTag.scrollIntoView(true);
        }

        const navTxts = document.querySelectorAll('.nav-txt');
        const targetTxt = [...navTxts].find(val => val.innerText.toLowerCase() === navTxt);

        const targetEle = targetTxt.parentElement;
        const targetEleHeight = targetEle.getBoundingClientRect().height;
        const targetEleLeft =  targetEle.offsetLeft;
        const targetEleTop =  targetEle.offsetTop;

        const fixedTop = targetEleTop + ( targetEleHeight / 2);

        const navPointer = document.querySelector('.nav-pointer');
        Object.assign(navPointer.style, {
            left: targetEleLeft + 'px',
            top: fixedTop + 'px'
        });
    }

    useEffect(() => { handleCollapsed() }, []);
    useEffect(() => { chNavLink() }, [hash, navTxt, collapsed]);

    return (
        <Box>
            <IconButton 
                color='primary'
                sx={{
                    display: { sx: 'block', md: 'none' },
                    position: 'relative', zIndex: 300
                }}
                onClick={() => setCollapsed(!collapsed)}
            >
                { 
                    collapsed 
                        ? <i className="fa-solid fa-hamburger"></i>
                        : <i className="fa-solid fa-xmark"></i>         
                }
            </IconButton>

            <Box 
                className='navbar-nav' sx={{ display: collapsed ? 'none' : 'block' }}
            >
                <Stack direction={{ xs: 'column', md: 'row' }} columnGap={2}>
                    {
                        navLinks.map(navLink => (
                            <Link
                                key={navLink.title} 
                                to={navLink.link} 

                                className='nav-link' 
                                style={{ 
                                    color: navLink.title === navTxt 
                                        ? 'var(--primary)' 
                                        : 'var(--white-non-active)',
                                    opacity: navLink.title === navTxt ? 1 : 0.8
                                }}

                                onClick={() => setNavTxt(navLink.title)}
                            >
                                {navLink.icon} <span className='nav-txt'>{navLink.title}</span>
                            </Link>
                        ))
                    }
                </Stack>

                <span className='nav-pointer'/>
            </Box>
        </Box>
    )
}

export default NavbarNav;