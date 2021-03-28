import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


class Footer extends Component {
    render() {
        return(
            <Container maxWidth={"lg"}>
                <br/>
                <Box component="span" >Doncy © 2021</Box>
            </Container>
        );
    }
}

export default Footer;