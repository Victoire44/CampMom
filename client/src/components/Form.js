import React from 'react';
//import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//import Input from '@material-ui/core/Input';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import { FirebaseDatabaseProvider } from "@react-firebase/database";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import Axios from 'axios';
import GoogleButton from 'react-google-button'
// import withStyles
// var $ = require("jQuery")




const firebaseApp = firebase.initializeApp(firebaseConfig);
// var database = firebase.database();

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};
// const db = firebase.database();
// const dbRef = db.ref().child("data");

// dbRef.on("value",snapshot =>{
//     this.setState({
//         data:snapshot.val()
//     })
// })

// var email = {},
// var 

firebaseAppAuth.onAuthStateChanged(function (user) {

    console.log("Auth state change noted", user);
    // If there's a user logged in:
    if (user) {

        // log user info to the console
        console.log("user is signed in!");
        console.log("USER: ", user);
        console.log(user.displayName)
        console.log(user.email)
        console.log(user.uid)

        Axios.post("/api/createusers",
            {
                name: user.displayName,
                email: user.email,
                uuid: user.uid
            }).then(function (data, status) {
                console.log("HIIIIIIIIII")
                if (user.emailVerified) {
                    this.setState({
                        isLoggedIn: true
                    })
                    console.log("HI YOU CAN SEE ME")
                }
                else {
                    console.log("YOU CANNOT SEE ME")
                }
                // alert("Data: " + data + "\nStatus: " + status);
            });


        // access logged in user's data
        //   database.ref("/" + user.uid).once("value").then(function (snapshot) {
        //     // log all user's info to console
        // console.log("User Authenticated Data from Firebase:", snapshot.val());


        // Send the user data to SQL - for now, just send user id, email, AND DISPLAY NAME (if they're not in the SQL DB already)

        //   });

    } else {
        // if no user logged in, then redirect them back to sign in page
        //   window.location.href = "/React-FirebaseGoogle-Test";

        console.log("User not signed in")
    }
});

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    },
}));


class Inputs extends React.Component {

    state = {
        isLoggedIn:false
    }

    componentDidMount() {

    }

    render() {


        const classes = useStyles;
        const {
            user,
            signOut,
            signInWithGoogle,
            handleLogin,
        } = this.props;
        var name = "";

        return (
            <div className={classes.container}>

                {/* <Input
                    placeholder="Username"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
                <Input
                    placeholder="Password"
                    className={classes.input}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                /> */}
                <Grid container spacing={3}>
                    <Grid item xs={12}  >
                        {
                            user ? name = user.displayName : name = ""
                        }
                        {/* {
                            user
                            
                                ? <p>Hello, {user.displayName}</p>
                            : <p></p>
                        } */}
                    </Grid>
                    <Grid item xs={12} sm={3} >
                        {
                            user
                                ? <button variant="contained" color="primary" className={classes.button} onClick={() => {signOut(); handleLogin(name, false)}}>Sign out</button>
                                : < GoogleButton variant="contained" color="primary" className={classes.button} onClick={() => {signInWithGoogle(); handleLogin(name, true)}}></GoogleButton>
                        }
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <Button id="sign-up" variant="contained" color="primary" className={classes.button}>
                            Sign Up
      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button id="login" variant="contained" color="primary" className={classes.button}>
                            Sign In
      </Button>
                    </Grid> */}
                </Grid>
            </div>
        );
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Inputs);