// import React, { useState } from 'react';
// import Modal from '@mui/material/Modal';
// import { makeStyles } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// // import MaterialTable from 'material-table';
// import TextField from '@mui/material/TextField';


// const useStyles = makeStyles(theme => ({
//     title: {
//         textAlign: "center",
//         background: "#225c5e",
//         color: "white",
//         padding: "40px"
//     },
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
//     button: {
//         background: "#9D2F16",
//         color: "white",
//         margin: "20px",
//         padding: "10px 30px"
//     },
// }));

// function TripModal(props) {
//     const classes = useStyles();

//     const [open, setOpen] = useState(false);

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const [state, setState] = useState({
//         columns:
//             [{ title: 'User', field: 'user' }],
//         data:
//             [{ user: 'Victoire' }],
//     });

//     return (
//         <div>
//             <i class="material-icons" onClick={handleOpen} style={{ cursor: "pointer", fontSize: "33px", color: "#225c5e" }}>add_circle_outline</i>

//             <Modal className={classes.modal}
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//                 open={open}
//                 onClose={handleClose}
//                 state={state}
//             >
//                 <Container maxWidth="md" className="modal">
//                     <Paper>
//                         <Typography variant="h3" component="h3" className={classes.title}>
//                             Add Trip
//                         </Typography>
//                         <br />
//                         <form className={classes.container} noValidate>
//                             <TextField
//                                 id="date"
//                                 label="Date"
//                                 type="date"
//                                 defaultValue="2019-08-09"
//                                 className={classes.textField}
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                             />
//                         </form>
//                         {/* <MaterialTable
//                             title="Add friends"
//                             columns={state.columns}
//                             data={state.data}
//                             editable={{
//                                 onRowAdd: newData =>
//                                     new Promise(resolve => {
//                                         setTimeout(() => {
//                                             resolve();
//                                             const data = [...state.data];
//                                             data.push(newData);
//                                             setState({ ...state, data });
//                                         }, 600);
//                                     }),
//                                 onRowUpdate: (newData, oldData) =>
//                                     new Promise(resolve => {
//                                         setTimeout(() => {
//                                             resolve();
//                                             const data = [...state.data];
//                                             data[data.indexOf(oldData)] = newData;
//                                             setState({ ...state, data });
//                                         }, 600);
//                                     }),
//                                 onRowDelete: oldData =>
//                                     new Promise(resolve => {
//                                         setTimeout(() => {
//                                             resolve();
//                                             const data = [...state.data];
//                                             data.splice(data.indexOf(oldData), 1);
//                                             setState({ ...state, data });
//                                         }, 600);
//                                     }),
//                             }}
//                         /> */}
//                         <div style={{ textAlign: "center" }}>
//                             <Button size="small" variant="contained" className={classes.button} buttonStyle={{ borderRadius: 25 }}
//                                 style={{ borderRadius: 25 }}> Submit
//                         </Button>
//                         </div>
//                     </Paper>
//                 </Container>
//             </Modal>
//         </div>
//     )
// }

// export default TripModal;



