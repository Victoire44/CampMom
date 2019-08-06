import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
// import withStyles




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

firebaseAppAuth.onAuthStateChanged(function (user) {

    console.log("Auth state change noted", user);
    // If there's a user logged in:
    if (user) {

      // log user info to the console
      console.log("user is signed in!");
      console.log("USER: ", user);  

    

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

    state = {}

    componentDidMount() {

    }

    render() {


        const classes = useStyles;
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;


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
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        user
                            ? <button variant="contained" color="primary" className={classes.button} onClick={signOut}>Sign out</button>
                            : <button variant="contained" color="primary" className={classes.button} onClick={signInWithGoogle}>Sign in with Google</button>
                    }
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