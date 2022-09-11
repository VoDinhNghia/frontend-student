import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography
            variant="body2"
            color="#EEEEEE"
            align="center"
            height='100px'
            backgroundColor="#000080"
        >
            {/* {'Copyright © '} */}
            <MuiLink
                color="#EEEEEE"
                href="http://localhost:8000/"
                lineHeight='100px'
            >
                Your Website
            </MuiLink>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}