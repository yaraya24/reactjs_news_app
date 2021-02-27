import React from 'react'
import axiosInstance from '../axios'
import { useHistory} from 'react-router-dom'
import { toast } from 'react-toastify';
import {Link as RouterLink} from 'react-router-dom'

//material-ui 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {AiOutlineLock } from 'react-icons/ai'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import 'react-toastify/dist/ReactToastify.min.css';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                uBrokeNews
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'red',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginForm = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const initialFormData = Object.freeze({
        email: '',
        password: '',

    });

    const [formData, setFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };


    const handleSubmit = (e) => {
        
        e.preventDefault();
        axiosInstance
            .post("dj-rest-auth/login/", {
                email: formData.email,
                password: formData.password,
            })
            .then((res) => {
                console.log(res.data['key'])
                localStorage.setItem('access_token', res.data['key'])
                history.push('/');
                props.handleLoginStatus(true)
                // console.log(res);
                // console.log(res.data);
                
            },  (error) => {
                for (let key in error.response.data) {
                    toast.error(error.response.data[key][0])
                }
                
              }
            )
    };


    return (
        <Container component="main" maxWidth="xs">
             
             
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AiOutlineLock />
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
              </Typography>
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            value = {FormData.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            value = {FormData.password}
                        />
                    </Grid>
                    
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleSubmit}
                >
                    Login
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Link  variant="body2">
                            <RouterLink to='/register'>
                            Don't have an account? Signup!
                            </RouterLink>
                    </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
        <Box mt={5}>
            <Copyright />
        </Box>
    </Container>

    )

}
export default LoginForm

