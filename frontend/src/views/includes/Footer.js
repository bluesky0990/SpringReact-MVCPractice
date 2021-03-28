import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


export default function Footer() {
    return(
        <Box component="div">
            <br/>
            <Container maxWidth={"lg"}>
                <Box component="span" >Doncy © 2021</Box>
            </Container>
            <br/>
        </Box>
    );
}
