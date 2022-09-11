import React from "react";
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from "next/link";
import { navLinks } from "../common/NavItem";
import { useStyles } from "./styles/Nav.module";

export default function NavItem() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Logo
                </Typography>
                <div className={classes.navlink}>
                    {navLinks.map((link) => {
                        return (
                            <Link href={link.path} className={classes.link}>
                                <span className={classes.link}> {link.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </Toolbar>
        </AppBar>
    );
}