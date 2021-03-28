import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Gird from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Paper } from '@material-ui/core';

import logo from '../static/images/logo.svg';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    Link: {
        fontSize: "0.8em",
        color: "white",
        border: 1,
        borderColor: "black"
    },
});

class Login extends Component {
    render() {
        return(
            <div style={{backgroundColor:"#f0f2f5"}}>
                <Container maxWidth="md">
                    <Gird container direction="row" justify="center" alignItems="center">
                        <Gird item xs>
                            <img src={logo} alt="logo" width={"70%"}/><br/>
                            <h3>특별한 일상을 지인들과 나눠보세요.</h3>
                        </Gird>
                        <Gird item xs>
                            <Paper elevation={3} style={{width:"70%", margin:"auto"}}>
                                <Box component="div" width={"90%"} margin={"auto"}>
                                    <FormControl fullWidth={true}>
                                        <br/>
                                        <TextField label="아이디" variant="outlined" size="small" maring="dense" autoFocus="true"/>
                                        <TextField label="비밀번호" variant="outlined" size="small" margin="dense" type="password"/>
                                        <Box component="div" mt={1}/>
                                        <Button variant="contained" color="primary" size="large" type="submit">로그인</Button>
                                        <Box component="div" my={1}/>
                                        <Link className={useStyles.Link}>비밀번호를 잊으셨나요?</Link>
                                    </FormControl>
                                </Box>
                                <Box component="div" width={"99%"} margin={"auto"}>
                                        <br/><Box component="div" width={"100%"} border={1} borderColor="grey.200"/><br/>
                                </Box>
                                <Box component="div" width={"90%"} margin={"auto"}>
                                    <FormControl fullWidth={true}>
                                        <Button variant="outlined" color="secondary" size="large">새 계정 만들기</Button><br/>
                                    </FormControl>
                                </Box>
                            </Paper>
                        </Gird>
                    </Gird>
                </Container>
            </div>
        );
    }
}

export default Login;