import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import logo from '../static/images/logo.svg';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        secondary: blueGrey
    }
});

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      //minWidth: 120,
      minWidth: "95%"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Login(props) {
    const classes = useStyles();

    const [signUpOpen, setSignUpOpen] = useState(false);
    const handleSignUpClickOpen = () => { setSignUpOpen(true) };
    const handleSignUpClose = () => { setSignUpOpen(false) };

    const [year, setYear] = useState(0);
    const handleChangeYear = (event) => { setYear(event.target.value) };
    const [month, setMonth] = useState(0);
    const handleChangeMonth = (event) => { setMonth(event.target.value) };
    const [day, setDay] = useState(0);
    const handleChangeDay = (event) => { setDay(event.target.value) };

    let date = new Date().getFullYear().toString();
    const years = [];
    let months = [];
    let days = [];
    for(let i = date; i >= 1905; i--) { years.push(i) }
    for(let i = 1; i <= 12; i++) { months.push(i) }
    for(let i = 1; i <= 31; i++) { days.push(i) }

    const yearList = years.map(year => <MenuItem value={year}>{year}</MenuItem>)
    const monthList = months.map(month => <MenuItem value={month}>{month}???</MenuItem>)
    const dayList = days.map(day => <MenuItem value={day}>{day}</MenuItem>)

    const [gender, setGender] = useState('??????');
    const handleChangeGender = (event) => { setGender(event.target.value) };

    return(
        <div style={{backgroundColor:"#f0f2f5", paddingTop:"10%", paddingBottom:"10%"}}>
            <Container maxWidth="md">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <img src={logo} alt="logo" width={"70%"}/><br/>
                        <h3>????????? ????????? ???????????? ???????????????.</h3>
                    </Grid>
                    <Grid item xs>
                        <Paper elevation={3} style={{width:"70%", margin:"auto"}}>
                            <Box component="div" width={"90%"} margin={"auto"}>
                                <FormControl fullWidth={true}>
                                    <br/>
                                    <TextField label="?????????" variant="outlined" size="small" margin="dense" autoFocus="true"/>
                                    <TextField label="????????????" variant="outlined" size="small" margin="dense" type="password"/>
                                    <Box component="div" mt={1}/>
                                    <Button variant="contained" color="primary" size="large" type="submit">?????????</Button>
                                    <Box component="div" my={1}/>
                                    <Link>??????????????? ????????????????</Link>
                                </FormControl>
                            </Box>
                            <Box component="div" width={"99%"} margin={"auto"}>
                                    <br/><Box component="div" width={"100%"} border={1} borderColor="grey.200"/><br/>
                            </Box>
                            <Box component="div" width={"90%"} margin={"auto"}>
                                <FormControl fullWidth={true}>
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" color="secondary" size="large" onClick={handleSignUpClickOpen}>??? ?????? ?????????</Button><br/>
                                    </ThemeProvider>
                                </FormControl>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Dialog open={signUpOpen} onClose={handleSignUpClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs>????????????</Grid>
                        <Grid item xs style={{textAlign:"right"}}>
                            <Link onClick={handleSignUpClose}><CloseRoundedIcon/></Link>
                        </Grid>
                    </Grid>
                </DialogTitle>

                <Box component="div" width={"99%"} border={1} borderColor="grey.200"/>

                <form method="post">
                    <DialogContent style={{textAlign:"center"}}>
                        <FormControl>
                            <DialogContentText>
                                <TextField label="???(???)" variant="outlined" size="small" margin="dense" autoFocus="true"/>&nbsp;
                                <TextField label="??????(?????? ??????)" variant="outlined" size="small" margin="dense"/>
                            </DialogContentText>
                            <TextField label="?????????" variant="outlined" size="small" margin="dense" type="email" fullWidth/>
                            <TextField label="??? ????????????" variant="outlined" size="small" margin="dense" type="password" fullWidth/>
                        </FormControl>

                        <br/><br/>

                        <DialogContentText>
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid item xs>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="labelSignupYear">??????</InputLabel>
                                        <Select labelId="labelSignupYear" id="signupYear" value={year} onChange={handleChangeYear} >
                                            {yearList}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="labelSignupMonth">???</InputLabel>
                                        <Select labelId="labelSignupMonth" id="signupMonth" value={month} onChange={handleChangeMonth} >
                                            {monthList}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="labelSignupDay">???</InputLabel>
                                        <Select labelId="labelSignupDay" id="signupDay" value={day} onChange={handleChangeDay} >
                                            {dayList}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContentText>

                        <FormControl component="fieldset" fullWidth>
                            <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleChangeGender}>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid item xs>
                                        <FormControlLabel control={<Radio color="primary"/>} value="female" label="??????" />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel control={<Radio color="primary"/>} value="male" label="??????" />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel control={<Radio color="primary"/>} value="other" label="??????" />
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>

                    <DialogActions style={{alignSelf:"center"}}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" color="secondary" size="large" fullWidth onClick={handleSignUpClose}>????????????</Button>
                        </ThemeProvider>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}