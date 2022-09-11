import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavItem from "../src/components/NavItem";

export default function Index() {
    return (
        <>
            <NavItem />
            <Container maxWidth="1000px">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js example
                    </Typography>
                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                    <ProTip />
                </Box>
            </Container>
            <Copyright />
        </>
    );
}