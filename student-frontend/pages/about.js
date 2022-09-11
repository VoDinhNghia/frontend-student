import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { fetchListCountry } from '../services/Countries';
import Notiflix from 'notiflix';
import NavItem from '../src/components/NavItem';

export default function About() {
    fetchListCountry().then((res) => {
        if (res.statusCode === 200) {
            Notiflix.Notify.success(res.message, {
                timeout: 3000,
            })
        }
    })
    return (
        <>
            <NavItem />
            <Container maxWidth="1000px">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Next.js example
                    </Typography>
                    <Button variant="contained" component={Link} noLinkStyle href="/">
                        Go to the main page
                    </Button>
                    <ProTip />
                </Box>
            </Container>
            <Copyright />
        </>
    );
}