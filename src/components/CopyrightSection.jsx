import React from 'react';
import { Box, Typography } from '@mui/material';

const CopyrightSection = ({ backgroundColor, py }) => {
    return (
        <Box py={py} sx={{ backgroundColor }}>
            <Typography
                sx={{
                    color: 'var(--body)',
                    fontSize: { xs: 13, sm: 20 },
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    textAlign: 'center',
                }}
            >
                <i className="fas fa-copyright"></i> {new Date().getUTCFullYear()} Copyright, Inc. All rights reserved.
            </Typography>
        </Box>
    )
}

export default CopyrightSection;